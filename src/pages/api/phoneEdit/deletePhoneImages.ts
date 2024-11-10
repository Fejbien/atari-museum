import type { APIRoute } from "astro";
import { supabase } from "../../../utils/supabase";

export const POST: APIRoute = async ({
    request,
    redirect,
    cookies,
}): Promise<Response> => {
    const accessToken = cookies.get("accessToken");
    const refreshToken = cookies.get("refreshToken");

    if (!accessToken || !refreshToken)
        return new Response("Unauthorized", { status: 401 });

    let userAuthId = null;
    const { data: userAuth, error: userAuthError } =
        await supabase.auth.getUser(accessToken.value);
    userAuthId = userAuth.user?.id;

    if (userAuthError) {
        const { data: refreshResponse, error: refreshError } =
            await supabase.auth.refreshSession({
                refresh_token: refreshToken.value,
            });

        if (refreshError) return new Response("Unauthorized", { status: 401 });

        if (refreshResponse.session?.access_token) {
            cookies.set("accessToken", refreshResponse.session.access_token, {
                path: "/",
            });
        } else return new Response("Access token not found", { status: 401 });

        if (refreshResponse.session?.refresh_token) {
            cookies.set("refreshToken", refreshResponse.session.refresh_token, {
                path: "/",
            });
        } else return new Response("Refresh token not found", { status: 401 });

        const { data: userAuthRefresh, error: userAuthRefreshError } =
            await supabase.auth.getUser(refreshResponse.session.access_token);

        userAuthId = userAuthRefresh.user?.id;
    }
    // Admin check Start
    const { data: adminCheck, error: adminError } = await supabase
        .from("admins")
        .select("admin_id")
        .eq("admin_id", userAuthId)
        .single();

    if (adminError) return new Response("Unauthorized", { status: 401 });
    const isAdmin = adminCheck !== null;
    if (!isAdmin) return new Response("Unauthorized", { status: 401 });
    // Admin check END

    const data = await request.formData();
    const selectedImages = data
        .get("selectedImagesPaths")
        ?.toString()
        .split(",");

    console.log("Selected images: ", selectedImages);

    if (!selectedImages)
        return new Response("No selected images", { status: 400 });

    console.log("Deleting images: ", selectedImages);
    const { data: deletionData, error: deleteionError } = await supabase.storage
        .from("images")
        .remove(selectedImages || []);

    console.log("Deletion data: ", deletionData);

    if (deleteionError) {
        console.log("Error deleting images: ", deleteionError);
        return new Response("Error deleting images", { status: 500 });
    }

    return new Response(`Success deleteing selected images`, { status: 200 });
};

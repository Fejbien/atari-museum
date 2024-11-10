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
    const id = data.get("id");
    console.log("Deleting phone entry with id:", id);

    const { data: dataResponse, error: errorResponse } = await supabase
        .from("telefony")
        .delete()
        .eq("id", id);

    if (errorResponse) {
        console.error("Error deleting phone entry:", errorResponse);
        return new Response("Error deleting phone entry", { status: 500 });
    }

    const { data: list, error: listError } = await supabase.storage
        .from("images")
        .list(`telefony/${id}`);

    if (list?.length === 0)
        return new Response(
            "Phone entry deleted successfully (No image was found!)",
            { status: 200 }
        );

    if (listError) {
        console.error("Error listing images:", listError);
        return new Response("Error listing images", { status: 500 });
    }

    const filesToRemove = list?.map((x) => `telefony/${id}/${x.name}`) ?? [];

    const { data: dataResponseImage, error: errorResponseImage } =
        await supabase.storage.from("images").remove(filesToRemove);

    if (errorResponseImage) {
        console.error("Error deleting image:", errorResponseImage);
        return new Response("Error deleting image", { status: 500 });
    }

    return new Response(`Phone entry deleted successfully`, { status: 200 });
};

import type { APIRoute } from "astro";
import { supabase } from "../../../utils/supabase";

export const POST: APIRoute = async ({
    request,
    redirect,
    cookies,
}): Promise<Response> => {
    const accessToken = cookies.get("accessToken");
    const refreshToken = cookies.get("refreshToken");

    if (!accessToken || !refreshToken) {
        // return redirect("/signin");
        return new Response("Unauthorized", { status: 401 });
    }

    const { data: userAuth, error: userAuthError } =
        await supabase.auth.getUser(accessToken.value);
    console.log(userAuth.user?.role);

    if (userAuthError)
        // return redirect("/signin");
        return new Response("Unauthorized", { status: 401 });

    // Admin check Start
    const { data: adminCheck, error: adminError } = await supabase
        .from("admins")
        .select("admin_id")
        .eq("admin_id", userAuth.user?.id)
        .single();

    //console.log("Admin error:", adminError);
    //console.log("Is Admin:", isAdmin);
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
        // return redirect('/error');
        return new Response("No selected images", { status: 400 });

    console.log("Deleting images: ", selectedImages);
    const { data: deletionData, error: deleteionError } = await supabase.storage
        .from("images")
        .remove(selectedImages || []);

    console.log("Deletion data: ", deletionData);

    if (deleteionError) {
        console.log("Error deleting images: ", deleteionError);
        // return redirect('/error');
        return new Response("Error deleting images", { status: 500 });
    }

    // return redirect('/');
    return new Response(`Success deleteing selected images`, { status: 200 });
};

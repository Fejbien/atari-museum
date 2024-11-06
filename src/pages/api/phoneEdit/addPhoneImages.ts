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

    const { data: userAuth, error: userAuthError } =
        await supabase.auth.getUser(accessToken.value);
    console.log(userAuth.user?.role);

    if (userAuthError) return new Response("Unauthorized", { status: 401 });

    // Admin check Start
    const { data: adminCheck, error: adminError } = await supabase
        .from("admins")
        .select("admin_id")
        .eq("admin_id", userAuth.user?.id)
        .single();

    if (adminError) return new Response("Unauthorized", { status: 401 });
    const isAdmin = adminCheck !== null;
    if (!isAdmin) return new Response("Unauthorized", { status: 401 });
    // Admin check END

    const formData = await request.formData();

    const id = formData.get("id") as string;
    let images = formData.getAll("file-input") as File[];

    if (images[0].size > 0) {
        for (const image of images) {
            let fileName = image.name.replace(" ", "");
            fileName = fileName.replace(/\s+/g, "");
            console.log("Uploading image: ", fileName);
            const { data: uploadData, error: uploadError } =
                await supabase.storage
                    .from("images")
                    .upload("telefony/" + id + "/" + fileName, image, {
                        cacheControl: "public, max-age=31536000",
                        upsert: false,
                    });

            if (uploadError) console.error(uploadError);
            console.log(uploadData);
        }
    }

    return new Response(`Success deleteing selected images`, { status: 200 });
};

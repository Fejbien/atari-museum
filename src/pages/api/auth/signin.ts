import type { APIRoute } from "astro";
import { supabase } from "../../../utils/supabase";
import type { Provider } from "@supabase/supabase-js";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const provider = formData.get("provider")?.toString();

    const validProviders = ["google"];
    //console.log(validProviders);

    if (provider && validProviders.includes(provider)) {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: provider as Provider,
            options: {
                redirectTo: "https://atari-museum.vercel.app/api/auth/callback",
            },
        });

        console.log(data);

        if (error) {
            return new Response(error.message, { status: 500 });
        }

        return redirect(data.url);
    }

    if (!email || !password) {
        return new Response("Email and password are required", { status: 400 });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    const { access_token, refresh_token } = data.session;
    cookies.set("accessToken", access_token, {
        path: "/",
    });
    cookies.set("refreshToken", refresh_token, {
        path: "/",
    });

    return new Response("OK", { status: 200 });
};

import { createServerClient, parseCookieHeader } from "@supabase/ssr";
import { type APIRoute } from "astro";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");
    console.log("success");
    const next = requestUrl.searchParams.get("next") || "/";

    if (code) {
        const supabase = createServerClient(
            import.meta.env.SUPABASE_URL,
            import.meta.env.SUPABASE_API_KEY,
            {
                cookies: {
                    getAll() {
                        return parseCookieHeader(
                            request.headers.get("Cookie") ?? ""
                        );
                    },
                    setAll(cookiesToSet) {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookies.set(name, value, options)
                        );
                    },
                },
            }
        );

        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (!error) {
            return redirect(next);
        }

        console.log(supabase);
    }

    // return the user to an error page with instructions
    return redirect("/auth/auth-code-error");
};

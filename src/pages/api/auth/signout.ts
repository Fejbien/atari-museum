import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
    cookies.delete("accessToken", { path: "/" });
    cookies.delete("refreshToken", { path: "/" });
    return redirect("/login");
};

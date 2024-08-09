import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, a as addAttribute, e as renderHead, d as renderComponent, f as renderSlot } from './astro/server_Chbsd7Pj.mjs';
import 'kleur/colors';
import 'clsx';
import { s as supabase } from './supabase_B_q0wfK0.mjs';
/* empty css                            */

const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");
  let email = "Unknown";
  if (accessToken && refreshToken) {
    const { data, error } = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value
    });
    if (error) {
      cookies.delete("accessToken", {
        path: "/"
      });
      cookies.delete("refreshToken", {
        path: "/"
      });
      return redirect("/signin");
    }
    email = data?.user?.email || "Unknown";
  }
  const show = !(Astro2.url.pathname === "/signin" || Astro2.url.pathname === "/register");
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-auto bg-white pt-1 pl-2 pb-1 border-b-black border-b-[3px] flex flex-row items-center justify-between"> <h1 class="font-pixeledFont text-2xl font-bold"> <a href="/">ATARI Muzeum</a> </h1> <div class="flex flex-row mr-2"> ${show && (email === "Unknown" ? renderTemplate`<a href="/signin" class="font-pixeledFont text-xl">Zaloguj</a>` : renderTemplate`<p class="pr-8 font-pixeledFont text-xl">${email}</p>
                <a href="/api/auth/signout" class="font-pixeledFont text-xl">Wyloguj</a>`)} </div> </div>`;
}, "D:/Git/atari-museum/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="h-screen"> <div class="w-full h-screen bg-mainBg fixed -z-10"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "D:/Git/atari-museum/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

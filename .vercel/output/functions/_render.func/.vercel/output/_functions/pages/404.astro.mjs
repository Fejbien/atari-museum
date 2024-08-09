/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Chbsd7Pj.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cu1xZo_J.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Atari muzeum" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-full flex flex-col justify-center items-center mt-8" style="margin-top: 8rem;"> <a href="/" class="text-6xl text-red-800">Strona nie istnieje!</a> <a href="/" class="text-2xl underline">Wróć na stronę główną</a> </div> ` })}`;
}, "D:/Git/atari-museum/src/pages/404.astro", void 0);

const $$file = "D:/Git/atari-museum/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

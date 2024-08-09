/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Chbsd7Pj.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cu1xZo_J.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { s as supabase } from '../chunks/supabase_B_q0wfK0.mjs';
export { renderers } from '../renderers.mjs';

const linkIcon = new Proxy({"src":"/_astro/linkIcon.BCnZGmRS.svg","width":800,"height":800,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Git/atari-museum/src/assets/linkIcon.svg";
							}
							
							return target[name];
						}
					});

const PhoneEntry = ({ data }) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-white border-[3px] border-black flex flex-col mt-4 min-w-80 w-[24%]", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-mainBgDark text-lg p-2 font-bold font-pixeledFont flex flex-row justify-between items-center", children: [
      /* @__PURE__ */ jsxs("h1", { children: [
        data.producent,
        " ",
        data.model
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsxs("a", { href: `/phoneDetails?id=${data.id}`, children: [
        " ",
        /* @__PURE__ */ jsx("img", { src: linkIcon.src, alt: "Link Icon", className: "w-6" }),
        " "
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col p-2", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "oznaczenie: ",
        data.oznaczenie
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "kolor: ",
        data.kolor
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "sprawny: ",
        data.sprawny ? "tak" : "nie"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "opakowanie: ",
        data.opakowanie ? "tak" : "nie"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "stan: ",
        data.stan
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "kraj: ",
        data.kraj
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "jezyk: ",
        data.jezyk
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-red-800", children: "uwagi:" }),
        " ",
        data.uwagi
      ] })
    ] })
  ] });
};

const $$Astro = createAstro();
const $$Phones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Phones;
  const { data, error } = await supabase.from("telefony").select();
  if (error) console.error(error);
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");
  const isLogged = accessToken && refreshToken;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Atari muzeum Telefony" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center flex-row h-[92dvh]"> <div class="flex flex-col w-1/6 p-4 bg-white border-[3px] border-black m-4 h-full"> <h1 class="text-3xl font-bold">Telefony</h1> <p class="text-lg">filtrowankoi tu bedzie</p> </div> <div class="flex flex-row w-full h-full gap-4 flex-wrap 2xl overflow-y-auto"> ${data && data.map((item) => {
    return renderTemplate`${renderComponent($$result2, "PhoneEntry", PhoneEntry, { "data": item })}`;
  })} </div> </div> ${isLogged && renderTemplate`<a href="/addPhone" class="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded">
Dodaj telefon
</a>`}` })}`;
}, "D:/Git/atari-museum/src/pages/phones.astro", void 0);

const $$file = "D:/Git/atari-museum/src/pages/phones.astro";
const $$url = "/phones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Phones,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

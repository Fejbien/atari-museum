/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Chbsd7Pj.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cu1xZo_J.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
export { renderers } from '../renderers.mjs';

const PhoneImg = new Proxy({"src":"/_astro/phone.-SLZcCNB.png","width":310,"height":336,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Git/atari-museum/src/assets/phone.png";
							}
							
							return target[name];
						}
					});

const AccessoriesImg = new Proxy({"src":"/_astro/accessories.zwkU1B_w.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Git/atari-museum/src/assets/accessories.png";
							}
							
							return target[name];
						}
					});

const LiteratureImg = new Proxy({"src":"/_astro/literature.B_LT8pwG.png","width":624,"height":634,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Git/atari-museum/src/assets/literature.png";
							}
							
							return target[name];
						}
					});

const StatsImg = new Proxy({"src":"/_astro/stats.Dh2-VJ2z.png","width":496,"height":503,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Git/atari-museum/src/assets/stats.png";
							}
							
							return target[name];
						}
					});

function SubPagesUI() {
  const subSites = [
    {
      name: "Telefony",
      path: "/phones",
      active: true,
      imgPath: PhoneImg.src
    },
    {
      name: "Akcesoria",
      path: "/accessories",
      active: true,
      imgPath: AccessoriesImg.src
    },
    {
      name: "Literatura",
      path: "/literature",
      active: true,
      imgPath: LiteratureImg.src
    },
    {
      name: "Statystyki",
      path: "/stats",
      active: true,
      imgPath: StatsImg.src
    }
  ];
  const subSitesHtml = subSites.map((site) => {
    if (!site.active) return;
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-white border-[3px] border-black flex flex-col mt-4 hover:bg-slate-400 transition-all duration-300 ease-in-out p-2 pt-4",
        children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: site.path,
            className: "flex flex-col justify-center w-full items-center",
            children: [
              /* @__PURE__ */ jsx("img", { src: site.imgPath, alt: site.name, className: "h-80" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold p-2", children: site.name })
            ]
          }
        )
      },
      site.name
    );
  });
  return /* @__PURE__ */ jsx("div", { className: "w-full h-full flex flex-row flex-wrap p-4 gap-4 justify-center", children: subSitesHtml });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Atari muzeum" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-full flex flex-col"> <div class="w-full p-4"> <div class="w-full bg-white border-[3px] border-black"> <h1 class="p-4 text-6xl font-pixeledFont">
Witaj w Atari muzeum
</h1> <p class="p-4 text-3xl">
W naszym muzeum znajdziesz wszystko co związane z Atari. Od
                    telefonów, przez akcesoria, po literaturę i statystyki.
</p> </div> </div> <div class="subsites">${renderComponent($$result2, "SubPagesRenderer", SubPagesUI, {})}</div> </div> ` })}`;
}, "D:/Git/atari-museum/src/pages/index.astro", void 0);

const $$file = "D:/Git/atari-museum/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

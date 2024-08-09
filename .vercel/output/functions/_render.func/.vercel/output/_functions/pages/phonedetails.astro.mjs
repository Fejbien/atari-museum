/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Chbsd7Pj.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cu1xZo_J.mjs';
import { s as supabase } from '../chunks/supabase_B_q0wfK0.mjs';
import { jsx } from 'react/jsx-runtime';
import 'react';
export { renderers } from '../renderers.mjs';

const binIcon = new Proxy({"src":"/_astro/binIcon.B4L0hQ-L.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Git/atari-museum/src/assets/binIcon.svg";
							}
							
							return target[name];
						}
					});

function DeletionButton({ id }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this phone entry?")) {
      fetch("/api/phoneEdit/deletePhoneEntry", {
        method: "POST",
        body: new URLSearchParams({ id: id.toString() }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then((res) => {
        if (res.ok) {
          window.alert(
            "Phone entry deleted successfully (redirect in 2s)"
          );
          setTimeout(function() {
            window.location.replace("/phones");
          }, 2e3);
        } else if (res.status === 401) {
          window.alert("Unauthorized");
          window.location.replace("/signin");
        } else {
          console.error(
            "Error deleting phone entry:",
            res.statusText
          );
        }
      }).catch((err) => {
        console.error("Error deleting phone entry:", err);
      });
    }
  };
  return /* @__PURE__ */ jsx("form", { className: "p-0 m-0 flex flex-row justify-center items-center", children: /* @__PURE__ */ jsx("button", { type: "button", onClick: handleDelete, className: "p-0 m-0", children: /* @__PURE__ */ jsx("img", { src: binIcon.src, className: "w-6 h-6 hover:scale-110" }) }) });
}

const $$Astro = createAstro();
const $$PhoneDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PhoneDetails;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");
  const isLogged = accessToken && refreshToken;
  const params = Astro2.url.searchParams;
  const id = params.get("id");
  const { data: pData, error: phoneError } = await supabase.from("telefony").select().eq("id", id);
  if (phoneError) console.error(phoneError);
  if (pData?.length == 0) {
    console.error("No data found for id: " + id);
    return Astro2.redirect("/phones");
  }
  const phoneData = pData;
  const data = phoneData[0];
  const { data: imageNamesFetch, error: imagesError } = await supabase.storage.from("images").list("telefony/" + id);
  if (imagesError) console.error(imagesError);
  const imageNames = imageNamesFetch?.map((image) => image.name) || [];
  const imageUrls = imageNames?.map((imageName) => {
    const { data: image } = supabase.storage.from("images").getPublicUrl(`telefony/${id}/${imageName}`);
    return image.publicUrl;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Atari muzeum" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row min-h-full justify-center w-full h-[92dvh]"> <div class="bg-white border-[3px] border-black flex flex-col m-4 min-w-80 w-auto max-w-96 h-full"> <div class="bg-mainBgDark text-lg p-2 font-bold font-pixeledFont flex flex-row justify-between items-center"> <h1 class="text-2xl">${data.producent} ${data.model}</h1> ${isLogged && renderTemplate`<div class="flex flex-row p-0 m-0 justify-center items-center"> ${renderComponent($$result2, "PhoneDeletion", DeletionButton, { "id": data.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Git/atari-museum/src/components/PhoneDeletionButton", "client:component-export": "default" })} </div>`} </div> <div class="flex flex-col [&>*:nth-child(odd)]:bg-slate-200 [&>*:nth-child(even)]:bg-slate-300 overflow-y-scroll"> <p class="p-2"><span class="font-bold">id:</span> ${data.id}</p> <p class="p-2"> <span class="font-bold">producent:</span> ${data.producent} </p> <p class="p-2"> <span class="font-bold">model:</span> ${data.model} </p> <p class="p-2"> <span class="font-bold">oznaczenie:</span> ${data.oznaczenie} </p> <p class="p-2"> <span class="font-bold">kolor:</span> ${data.kolor} </p> <p class="p-2"> <span class="font-bold">sprawny:</span> ${data.sprawny ? "tak" : "nie"} </p> <p class="p-2"> <span class="font-bold">stan:</span> ${data.stan} </p> <p class="p-2"> <span class="font-bold">numer seryjny:</span> ${data.numer_seryjny} </p> <p class="p-2"> <span class="font-bold">kraj:</span> ${data.kraj} </p> <p class="p-2"> <span class="font-bold">jezyk:</span> ${data.jezyk} </p> <p class="p-2"> <span class="font-bold">simlock:</span> ${data.simlock} </p> <p class="p-2 text-wrap"> <span class="font-bold">uwagi:</span> ${data.uwagi} </p> <p class="p-2"> <span class="font-bold">opakowanie:</span> ${data.opakowanie ? "tak" : "nie"} </p> <p class="p-2"> <span class="font-bold">rok produkcji:</span> ${data.rok_produkcji ? data.rok_produkcji.toString() : "N/A"} </p> <p class="p-2"> <span class="font-bold">zdarzenie:</span> ${data.zdarzenie} </p> <p class="p-2"> <span class="font-bold">model baterii:</span> ${data.model_baterii} </p> <p class="p-2"> <span class="font-bold">made:</span> ${data.made ? data.made.toString() : "N/A"} </p> <p class="p-2"> <span class="font-bold">life_timer:</span> ${data.life_timer} </p> <p class="p-2"> <span class="font-bold"> posiadany:</span> ${data.posiadany ? "tak" : "nie"} </p> <p class="p-2 text-wrap"> <span class="text-red-800 font-bold">uwagi:</span> ${data.uwagi} </p> </div> </div> <div class="h-[92dvh] w-full flex flex-row flex-wrap gap-4 m-4 mr-0 overflow-y-scroll"> ${renderComponent($$result2, "PhoneImageGallery", null, { "imageUrls": imageUrls, "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Git/atari-museum/src/components/PhoneImageGallery", "client:component-export": "default" })} </div> </div> ` })}`;
}, "D:/Git/atari-museum/src/pages/phoneDetails.astro", void 0);

const $$file = "D:/Git/atari-museum/src/pages/phoneDetails.astro";
const $$url = "/phoneDetails";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PhoneDetails,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

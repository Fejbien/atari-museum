/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Chbsd7Pj.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cu1xZo_J.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

function RegisterUI() {
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let dataVals = {};
    for (const [key, value] of formData.entries()) {
      if (value === "") continue;
      dataVals[key] = value;
    }
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: new URLSearchParams(dataVals),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    if (response.ok) {
      window.location.replace("/signin");
    } else {
      const errorDetails = await response.text();
      switch (errorDetails) {
        case "Email and password are required":
          setErrorMessage("Email i hasło są wymagane");
          break;
        case "Email already in use":
          setErrorMessage("Email jest już w użyciu");
          break;
        case "User already registered":
          setErrorMessage("Użytkownik już zarejestrowany");
          break;
        default:
          setErrorMessage("Wystąpił błąd");
          break;
      }
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mt-10 bg-white border-[3px] border-black p-6 flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl font-pixeledFont", children: "Rejestracja" }),
    /* @__PURE__ */ jsxs("p", { className: "text-xl", children: [
      "Masz juz konto?",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/signin",
          className: "text-blue-600 underline font-bold hover:text-blue-800 hover:no-underline",
          children: "Zaloguj"
        }
      )
    ] }),
    errorMessage && /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center transition-all", children: /* @__PURE__ */ jsx("p", { className: "bg-red-500 p-2 m-2 text-white rounded w-3/4 text-center font-bold", children: errorMessage }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col p-2", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          name: "email",
          id: "email",
          className: "min-w-96 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "m-2" }),
      /* @__PURE__ */ jsx("label", { htmlFor: "password", children: "Hasło:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          name: "password",
          id: "password",
          className: "min-w-96 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center mt-4", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-3/4",
          children: "Zarejestruj"
        }
      ) })
    ] })
  ] });
}

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rejestracja" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row w-full h-full justify-center"> ${renderComponent($$result2, "RegisterUI", RegisterUI, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Git/atari-museum/src/components/Register", "client:component-export": "default" })} </div> ` })}`;
}, "D:/Git/atari-museum/src/pages/register.astro", void 0);

const $$file = "D:/Git/atari-museum/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Register,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

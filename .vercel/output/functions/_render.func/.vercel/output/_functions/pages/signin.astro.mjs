/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Chbsd7Pj.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$Layout } from '../chunks/Layout_Cu1xZo_J.mjs';
export { renderers } from '../renderers.mjs';

function LoginUI() {
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const formData = new FormData(e.target);
    let dataVals = {};
    for (const [key, value] of formData.entries()) {
      if (value === "") continue;
      dataVals[key] = value;
    }
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      body: new URLSearchParams(dataVals),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    if (response.ok) {
      window.location.replace("/");
    } else {
      const errorDetails = await response.text();
      console.log(errorDetails);
      switch (errorDetails) {
        case "Email and password are required":
          setErrorMessage("Email i hasło są wymagane");
          break;
        case "Invalid login credentials":
          setErrorMessage("Nieprawidłowe dane logowania");
          break;
        default:
          setErrorMessage("Wystąpił błąd");
          break;
      }
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mt-10 bg-white border-[3px] border-black p-6 flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl font-pixeledFont", children: "Zaloguj sie" }),
    /* @__PURE__ */ jsxs("p", { className: "text-xl", children: [
      "Nowy tutaj?",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/register",
          className: "text-blue-600 underline font-bold hover:text-blue-800 hover:no-underline",
          children: "Utworz konto"
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
          children: "Login"
        }
      ) })
    ] })
  ] });
}

const $$Astro = createAstro();
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");
  if (accessToken && refreshToken) {
    return redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Logowanie" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row w-full h-full justify-center"> ${renderComponent($$result2, "LoginUI", LoginUI, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Git/atari-museum/src/components/Login", "client:component-export": "default" })} </div> ` })}`;
}, "D:/Git/atari-museum/src/pages/signin.astro", void 0);

const $$file = "D:/Git/atari-museum/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Signin,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

export { renderers } from '../../../renderers.mjs';

const GET = async ({ cookies, redirect }) => {
  cookies.delete("accessToken", { path: "/" });
  cookies.delete("refreshToken", { path: "/" });
  return redirect("/signin");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

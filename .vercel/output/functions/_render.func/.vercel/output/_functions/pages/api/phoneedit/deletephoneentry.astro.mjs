import { s as supabase } from '../../../chunks/supabase_B_q0wfK0.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({
  request,
  redirect,
  cookies
}) => {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");
  if (!accessToken || !refreshToken) {
    return new Response("Unauthorized", { status: 401 });
  }
  const { data: userAuth, error: userAuthError } = await supabase.auth.getUser(accessToken.value);
  console.log(userAuth.user?.role);
  const data = await request.formData();
  const id = data.get("id");
  console.log("Deleting phone entry with id:", id);
  const { data: dataResponse, error: errorResponse } = await supabase.from("telefony").delete().eq("id", id);
  if (errorResponse) {
    console.error("Error deleting phone entry:", errorResponse);
    return new Response("Error deleting phone entry", { status: 500 });
  }
  const { data: list, error: listError } = await supabase.storage.from("images").list(`telefony/${id}`);
  if (list?.length === 0) {
    return new Response(
      "Phone entry deleted successfully (No image was found!)",
      { status: 200 }
    );
  }
  if (listError) {
    console.error("Error listing images:", listError);
    return new Response("Error listing images", { status: 500 });
  }
  const filesToRemove = list?.map((x) => `telefony/${id}/${x.name}`) ?? [];
  const { data: dataResponseImage, error: errorResponseImage } = await supabase.storage.from("images").remove(filesToRemove);
  if (errorResponseImage) {
    console.error("Error deleting image:", errorResponseImage);
    return new Response("Error deleting image", { status: 500 });
  }
  return new Response(`Phone entry deleted successfully`, { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

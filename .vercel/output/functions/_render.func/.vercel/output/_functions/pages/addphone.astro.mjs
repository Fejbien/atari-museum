/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as createAstro } from '../chunks/astro/server_Chbsd7Pj.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cu1xZo_J.mjs';
import 'clsx';
import { s as supabase } from '../chunks/supabase_B_q0wfK0.mjs';
export { renderers } from '../renderers.mjs';

const $$FlagPicker = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<select class="w-full" name="kraj" class="w-full px-3 py-2 border border-gray-300 rounded"> <option disabled selected> -- Wybierz kraj -- </option> <option value="US">🇺🇸 Stany Zjednoczone</option> <option value="GB">🇬🇧 Wielka Brytania</option> <option value="PL">🇵🇱 Polska</option> <option value="FL">🇫🇮 Finlandia</option> <option style="font-size: 1pt; background-color: #000000;" disabled>&nbsp;</option> <option value="AF">🇦🇫 Afganistan</option> <option value="AL">🇦🇱 Albania</option> <option value="DZ">🇩🇿 Algieria</option> <option value="AD">🇦🇩 Andora</option> <option value="AO">🇦🇴 Angola</option> <option value="AG">🇦🇬 Antigua i Barbuda</option> <option value="AR">🇦🇷 Argentyna</option> <option value="AM">🇦🇲 Armenia</option> <option value="AU">🇦🇺 Australia</option> <option value="AT">🇦🇹 Austria</option> <option value="AZ">🇦🇿 Azerbejdżan</option> <option value="BS">🇧🇸 Bahamy</option> <option value="BH">🇧🇭 Bahrajn</option> <option value="BD">🇧🇩 Bangladesz</option> <option value="BB">🇧🇧 Barbados</option> <option value="BE">🇧🇪 Belgia</option> <option value="BZ">🇧🇿 Belize</option> <option value="BJ">🇧🇯 Benin</option> <option value="BT">🇧🇹 Bhutan</option> <option value="BY">🇧🇾 Białoruś</option> <option value="BO">🇧🇴 Boliwia</option> <option value="BA">🇧🇦 Bośnia i Hercegowina</option> <option value="BW">🇧🇼 Botswana</option> <option value="BR">🇧🇷 Brazylia</option> <option value="BN">🇧🇳 Brunei</option> <option value="BG">🇧🇬 Bułgaria</option> <option value="BF">🇧🇫 Burkina Faso</option> <option value="BI">🇧🇮 Burundi</option> <option value="CV">🇨🇻 Cabo Verde</option> <option value="CL">🇨🇱 Chile</option> <option value="HR">🇭🇷 Chorwacja</option> <option value="TD">🇹🇩 Czad</option> <option value="ME">🇲🇪 Czarnogóra</option> <option value="CZ">🇨🇿 Czechy</option> <option value="DJ">🇩🇯 Dżibuti</option> <option value="DM">🇩🇲 Dominika</option> <option value="DO">🇩🇴 Dominikana</option> <option value="EG">🇪🇬 Egipt</option> <option value="EC">🇪🇨 Ekwador</option> <option value="ER">🇪🇷 Erytrea</option> <option value="EE">🇪🇪 Estonia</option> <option value="SZ">🇸🇿 Eswatini</option> <option value="ET">🇪🇹 Etiopia</option> <option value="FJ">🇫🇯 Fidżi</option> <option value="PH">🇵🇭 Filipiny</option> <option value="FI">🇫🇮 Finlandia</option> <option value="FR">🇫🇷 Francja</option> <option value="GA">🇬🇦 Gabon</option> <option value="GM">🇬🇲 Gambia</option> <option value="GH">🇬🇭 Ghana</option> <option value="GR">🇬🇷 Grecja</option> <option value="GD">🇬🇩 Grenada</option> <option value="GT">🇬🇹 Gwatemala</option> <option value="GW">🇬🇼 Gwinea Bissau</option> <option value="GN">🇬🇳 Gwinea</option> <option value="GY">🇬🇾 Gujana</option> <option value="HT">🇭🇹 Haiti</option> <option value="ES">🇪🇸 Hiszpania</option> <option value="HN">🇭🇳 Honduras</option> <option value="IN">🇮🇳 Indie</option> <option value="ID">🇮🇩 Indonezja</option> <option value="IQ">🇮🇶 Irak</option> <option value="IR">🇮🇷 Iran</option> <option value="IE">🇮🇪 Irlandia</option> <option value="IS">🇮🇸 Islandia</option> <option value="IL">🇮🇱 Izrael</option> <option value="JM">🇯🇲 Jamajka</option> <option value="JP">🇯🇵 Japonia</option> <option value="YE">🇾🇪 Jemen</option> <option value="JO">🇯🇴 Jordania</option> <option value="KH">🇰🇭 Kambodża</option> <option value="CM">🇨🇲 Kamerun</option> <option value="CA">🇨🇦 Kanada</option> <option value="QA">🇶🇦 Katar</option> <option value="KZ">🇰🇿 Kazachstan</option> <option value="KE">🇰🇪 Kenia</option> <option value="KG">🇰🇬 Kirgistan</option> <option value="KI">🇰🇮 Kiribati</option> <option value="CO">🇨🇴 Kolumbia</option> <option value="KM">🇰🇲 Komory</option> <option value="CG">🇨🇬 Kongo</option> <option value="CD">🇨🇩 Kongo (DRK)</option> <option value="KP">🇰🇵 Korea Północna</option> <option value="KR">🇰🇷 Korea Południowa</option> <option value="CR">🇨🇷 Kostaryka</option> <option value="CU">🇨🇺 Kuba</option> <option value="KW">🇰🇼 Kuwejt</option> <option value="LA">🇱🇦 Laos</option> <option value="LS">🇱🇸 Lesotho</option> <option value="LB">🇱🇧 Liban</option> <option value="LR">🇱🇷 Liberia</option> <option value="LY">🇱🇾 Libia</option> <option value="LI">🇱🇮 Liechtenstein</option> <option value="LT">🇱🇹 Litwa</option> <option value="LU">🇱🇺 Luksemburg</option> <option value="LV">🇱🇻 Łotwa</option> <option value="MK">🇲🇰 Macedonia Północna</option> <option value="MG">🇲🇬 Madagaskar</option> <option value="MW">🇲🇼 Malawi</option> <option value="MV">🇲🇻 Malediwy</option> <option value="MY">🇲🇾 Malezja</option> <option value="ML">🇲🇱 Mali</option> <option value="MT">🇲🇹 Malta</option> <option value="MA">🇲🇦 Maroko</option> <option value="MH">🇲🇭 Wyspy Marshalla</option> <option value="MR">🇲🇷 Mauretania</option> <option value="MU">🇲🇺 Mauritius</option> <option value="MX">🇲🇽 Meksyk</option> <option value="FM">🇫🇲 Mikronezja</option> <option value="MD">🇲🇩 Mołdawia</option> <option value="MN">🇲🇳 Mongolia</option> <option value="MZ">🇲🇿 Mozambik</option> <option value="NA">🇳🇦 Namibia</option> <option value="NR">🇳🇷 Nauru</option> <option value="NP">🇳🇵 Nepal</option> <option value="DE">🇩🇪 Niemcy</option> <option value="NE">🇳🇪 Niger</option> <option value="NG">🇳🇬 Nigeria</option> <option value="NI">🇳🇮 Nikaragua</option> <option value="NO">🇳🇴 Norwegia</option> <option value="NZ">🇳🇿 Nowa Zelandia</option> <option value="OM">🇴🇲 Oman</option> <option value="PK">🇵🇰 Pakistan</option> <option value="PW">🇵🇼 Palau</option> <option value="PA">🇵🇦 Panama</option> <option value="PG">🇵🇬 Papua-Nowa Gwinea</option> <option value="PY">🇵🇾 Paragwaj</option> <option value="PE">🇵🇪 Peru</option> <option value="PL">🇵🇱 Polska</option> <option value="PT">🇵🇹 Portugalia</option> <option value="CG">🇨🇬 Republika Konga</option> <option value="KR">🇰🇷 Republika Korei</option> <option value="MK">🇲🇰 Republika Macedonii Północnej</option> <option value="MD">🇲🇩 Republika Mołdawii</option> <option value="RO">🇷🇴 Rumunia</option> <option value="RW">🇷🇼 Rwanda</option> <option value="EH">🇪🇭 Sahara Zachodnia</option> <option value="KN">🇰🇳 Saint Kitts i Nevis</option> <option value="LC">🇱🇨 Saint Lucia</option> <option value="VC">🇻🇨 Saint Vincent i Grenadyny</option> <option value="SV">🇸🇻 Salwador</option> <option value="WS">🇼🇸 Samoa</option> <option value="SM">🇸🇲 San Marino</option> <option value="SN">🇸🇳 Senegal</option> <option value="RS">🇷🇸 Serbia</option> <option value="SC">🇸🇨 Seszele</option> <option value="SL">🇸🇱 Sierra Leone</option> <option value="SG">🇸🇬 Singapur</option> <option value="SK">🇸🇰 Słowacja</option> <option value="SI">🇸🇮 Słowenia</option> <option value="SO">🇸🇴 Somalia</option> <option value="SD">🇸🇩 Sudan</option> <option value="SS">🇸🇸 Sudan Południowy</option> <option value="SR">🇸🇷 Surinam</option> <option value="SY">🇸🇾 Syria</option> <option value="CH">🇨🇭 Szwajcaria</option> <option value="SE">🇸🇪 Szwecja</option> <option value="TJ">🇹🇯 Tadżykistan</option> <option value="TH">🇹🇭 Tajlandia</option> <option value="TZ">🇹🇿 Tanzania</option> <option value="TG">🇹🇬 Togo</option> <option value="TO">🇹🇴 Tonga</option> <option value="TT">🇹🇹 Trynidad i Tobago</option> <option value="TN">🇹🇳 Tunezja</option> <option value="TR">🇹🇷 Turcja</option> <option value="TM">🇹🇲 Turkmenistan</option> <option value="TV">🇹🇻 Tuvalu</option> <option value="UG">🇺🇬 Uganda</option> <option value="UA">🇺🇦 Ukraina</option> <option value="UY">🇺🇾 Urugwaj</option> <option value="UZ">🇺🇿 Uzbekistan</option> <option value="VU">🇻🇺 Vanuatu</option> <option value="VA">🇻🇦 Watykan</option> <option value="VE">🇻🇪 Wenezuela</option> <option value="HU">🇭🇺 Węgry</option> <option value="GB">🇬🇧 Wielka Brytania</option> <option value="VN">🇻🇳 Wietnam</option> <option value="IT">🇮🇹 Włochy</option> <option value="ZR">🇿🇲 Zambia</option> <option value="ZW">🇿🇼 Zimbabwe</option> <option value="AE">🇦🇪 Zjednoczone Emiraty Arabskie</option> </select>`;
}, "D:/Git/atari-museum/src/components/FlagPicker.astro", void 0);

const $$Astro = createAstro();
const $$AddPhone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AddPhone;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");
  if (!accessToken || !refreshToken) {
    return redirect("/signin");
  }
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    let dataVals = {};
    for (const [key, value] of formData.entries()) {
      if (value === "") continue;
      if (key === "file-input") continue;
      dataVals[key] = value;
    }
    let images = formData.getAll("file-input");
    const { data, error } = await supabase.from("telefony").insert(dataVals).select("id");
    let id = 0;
    if (error) console.error(error);
    if (!data) console.log("Null id");
    else id = data[0].id;
    if (!error && images[0].size > 0) {
      for (const image of images) {
        const { data: uploadData, error: uploadError } = await supabase.storage.from("images").upload("telefony/" + id + "/" + image.name, image, {
          cacheControl: "public, max-age=31536000",
          upsert: false
        });
        if (uploadError) console.error(uploadError);
      }
    }
    return Astro2.redirect("/phoneDetails?id=" + id);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Formularz" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="m-5 bg-white border-[3px] border-black flex flex-col min-w-80"> <div class="bg-mainBgDark text-lg p-2 font-bold font-pixeledFont flex flex-row justify-between items-center"> <h1>Formularz</h1> </div> <div class="m-5"> <form method="POST" enctype="multipart/form-data" class="w-full flex flex-row justify-evenly gap-4 lg:flex-col flex-wrap"> <div class="w-[48%] lg:w-full"> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="producent">Producent:</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="producent" name="producent"> </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="model">Model:</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="model" name="model"> </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="oznaczenie">Oznaczenie:</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="oznaczenie" name="oznaczenie"> </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="kolor">Kolor:</label> <datalist id="colours"> <option value="Czarny">Czarny</option> <option value="Biały">Biały</option> <option value="Srebrny">Srebrny</option> <option value="Złoty">Złoty</option> <option value="Niebieski">Niebieski</option> <option value="Czerwony">Czerwony</option> <option value="Różowy">Różowy</option> <option value="Zielony">Zielony</option> <option value="Żółty">Żółty</option> <option value="Pomarańczowy">Pomarańczowy</option> <option value="Fioletowy">Fioletowy</option> <option value="Brązowy">Brązowy</option> <option value="Szary">Szary</option> <option value="Beżowy">Beżowy</option> <option value="Inny">Inny</option> </datalist> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="kolor" name="kolor" list="colours"> </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"></div> <label class="md:w-2/3 block font-bold"> <input class="mr-2 leading-tight" type="checkbox" name="sprawny" value="1" checked> <span class="text-sm">Sprawny</span> </label> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="stan">Stan:</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="stan" name="stan"> </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="numer_seryjny">Numer seryjny:</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="numer_seryjny" name="numer_seryjny"> </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4">Kraj:</label> </div> <div class="md:w-2/3"> ${renderComponent($$result2, "FlagPicker", $$FlagPicker, {})} </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="jezyk">Język:</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="jezyk" name="jezyk"> </div> </div> </div> </div>  <div class="w-[48%] lg:w-full"> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="simlock">Simlock:</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="simlock" name="simlock"> </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="uwagi">Uwagi:</label> </div> <div class="md:w-2/3"> <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="uwagi" name="uwagi"></textarea> </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"></div> <label class="md:w-2/3 block font-bold"> <input class="mr-2 leading-tight" type="checkbox" name="opakowanie" value="1" checked> <span class="text-sm">Opakowanie</span> </label> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="rok_produkcji">Rok produkcji:</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="date" id="rok_produkcji" name="rok_produkcji"> </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="zdarzenie">Zdarzenie:</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="zdarzenie" name="zdarzenie"> </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="model_baterii">Model baterii:</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="model_baterii" name="model_baterii"> </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="made">Made:</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="made" name="made"> </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"> <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="life_timer">Life timer:</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="life_timer" name="life_timer"> </div> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"></div> <label class="md:w-2/3 block font-bold"> <input class="mr-2 leading-tight" type="checkbox" name="posiadany" value="1" checked> <span class="text-sm">Posiadany</span> </label> </div> </div> <div class="mb-6"> <div class="flex flex-col md:flex-row md:items-center"> <div class="md:w-1/3"></div> <label class="md:w-2/3 block font-bold"></label> <input type="file" id="file-input" name="file-input" multiple accept="image/png, image/jpeg, image/gif, image/bmp, image/webp, image/tiff, image/svg+xml, image/x-icon"> </div> </div> </div> <div class="flex justify-center items-center w-full"> <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-3/4" onclick="submit">
Dodaj
</button> </div> </form> </div> </div> <a href="/" class="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded">
Powrót
</a> ` })}`;
}, "D:/Git/atari-museum/src/pages/addPhone.astro", void 0);

const $$file = "D:/Git/atari-museum/src/pages/addPhone.astro";
const $$url = "/addPhone";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AddPhone,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

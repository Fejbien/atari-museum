/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                mainBg: "#32cc33",
                mainBgDark: "#d1d1d1",
            },
            height: {
                screen: [
                    "100vh /* fallback for Opera, IE and etc. */",
                    "100dvh",
                ],
            },
            width: {
                screen: [
                    "100vw /* fallback for Opera, IE and etc. */",
                    "100dvw",
                ],
            },
            fontFamily: {
                pixeledFont: ['"Pixelify Sans"', "sans-serif"],
            },
        },
        screens: {
            "2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // => @media (max-width: 639px) { ... }
        },
    },
    plugins: [],
};

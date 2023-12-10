/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-blue": "#0A2472",
                "secondary-blue": "#1E96FC",
            },
            boxShadow: {
                custom: "rgba(50,50,93,0.25) 0px 4px 10px -2px, rgba(0, 0, 0, 0.3) 0px 2px 6px -2px",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

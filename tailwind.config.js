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
                "custom-primary-blue": "#004E98",
                "custom-secondary-blue": "#3A6EA5",
                "custom-silver": "#C0C0C0",
                "custom-white": "#EBEBEB",
                "custom-orange": "#FF6700",
                "custom-turquoise": "#14a998",
                "custom-green": "#59ab73"
            },
            boxShadow: {
                custom: "rgba(50,50,93,0.25) 0px 4px 10px -2px, rgba(0, 0, 0, 0.3) 0px 2px 6px -2px",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

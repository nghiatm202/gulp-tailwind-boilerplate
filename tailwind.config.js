/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "JIT",
    content: [
        './views/**/*.pug',
        './public/**/*.html',
        './app/**/*.{js,jsx,ts,tsx,vue}',
    ],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
    theme: {
        screens: {
            '2xl': { 'max': '1399.98px' },

            'xl': { 'max': '1199.98px' },

            'lg': { 'max': '991.98px' },

            'md': { 'max': '767.98px' },

            'sm': { 'max': '575.98px' },
        },
        extend: {},
    },
    variants: {
        extend: {
            display: ["group-hover"],
            margin: ["group-hover"],
            visibility: ["group-hover"],
        }
    },
    plugins: [],
}
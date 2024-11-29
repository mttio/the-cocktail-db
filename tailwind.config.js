

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0f172a',
                    dark: '#0b1120',
                    light: '#1e293b',
                    lighter: '#242f3c',
                },
                accent1: {
                    DEFAULT: '#0ea4e8',
                    light: '#48c5fd',
                },
                accent2: {
                    DEFAULT: '#6366ef',
                },
            },
        },
    },
    plugins: [],
}
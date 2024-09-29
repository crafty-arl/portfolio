/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ['Playfair Display', 'serif'],
                secondary: ['Courier Prime', 'monospace'],
            },
        },
    },
    plugins: [],
}
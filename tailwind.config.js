/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#181229', // Dark Navy Text
                background: '#fffbf4', // Light Cream Background
                secondary: '#2f2f91',
                accent: '#f5c543',
                'light-purple': '#8a6aa4',
                'light-green': '#c5e2ca',
                'off-white': '#fcfaf9',
                'off-white-2': '#e9e3dd',
                white: '#ffffff',
            },
            fontFamily: {
                recife: ['RecifeText', 'serif'],
                'recife-display': ['RecifeDisplay', 'serif'],
                plain: ['Plain', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'blue-gradient': 'url("/src/assets/backblue.gif")',
                'fade-gradient': 'url("/src/assets/fade.gif")',
            },
        },
    },
    plugins: [],
}

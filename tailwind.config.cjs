const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{svelte,js,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                svelte: {
                    50: '#FFF5EC',
                    100: '#FFE9D3',
                    200: '#FFCEA5',
                    300: '#FFAC6D',
                    400: '#FF7D32',
                    500: '#FF590A',
                    600: '#FF3E00',
                    700: '#CC2902',
                    800: '#A1210B',
                    900: '#821E0C'
                }
            }
        }
    },
    plugins: []
};

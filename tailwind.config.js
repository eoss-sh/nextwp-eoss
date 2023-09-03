/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './utils/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Merriweather'],
                body: ['Lato', 'sans-serif'],
            },
            colors: {
                primary: '#042825',
                secondary: '#F76C5E',
                tertiary: '#586BA4',
                accent: '#F5DD90',
                landing: '#F68E5F',
                white: '#ffffff',
                black: '#000000',
            },
            fontSize: {
                base: '1.375rem',
            },
            gridtemplatecolumns: {
                p: '1fr min(65ch, 100%) 1fr',
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: {
                    fontSize: theme('fontSize.2xl'),
                    fontFamily: theme('fontFamily.body'),
                },
                h2: {
                    fontSize: theme('fontSize.xl'),
                    fontFamily: theme('fontFamily.body'),
                },
                h3: {
                    fontSize: theme('fontSize.lg'),
                    fontFamily: theme('fontFamily.heading'),
                },
                h4: {
                    fontSize: theme('fontSize.base'),
                    fontFamily: theme('fontFamily.body'),
                },
                p: {
                    fontSize: theme('fontSize.base'),
                    fontFamily: theme('fontFamily.body'),
                },
                a: {
                    fontSize: theme('fontSize.base'),
                    fontFamily: theme('fontFamily.body'),
                    borderBottom: '2px solid theme("colors.secondary")',
                },
            })
        }),
    ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backdropBlur: {
                '4xl': '300px'
            },
            keyframes: {
                pulseping: {
                    '50%': {
                        transform: 'scale(1.1)',
                        opacity: '0.5'
                    },
                    '0%, 100%': {
                        transform: 'scale(1)',
                        opacity: '1'
                    }
                },
                jumping: {
                    '50%': {
                        transform: 'translateY(-0.25rem)'
                    }
                },
                fadeIn: {
                    '0%': {
                        opacity: '0',
                        display: 'none'
                    },
                    '5%': {
                        display: "block"
                    },
                    '100%': {
                        opacity: '1'
                    }
                }
            },
            animation: {
                pulseping: 'pulseping 1.3s ease-in-out infinite',
                updown: 'jumping 0.75s ease-in-out infinite',
                fadeIn: 'fadeIn 0.5s ease-in infinite'
            }
        },
    },
    plugins: [],
}
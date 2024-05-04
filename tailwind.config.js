import withMT from '@material-tailwind/react/utils/withMT'

module.exports = withMT({
  darkMode: 'selector',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'sans': ["ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
      ]
    },
    extend: {
      keyframes: {
        entry: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      animation: {
        entry: 'entry 1s ease-in-out'
      }
    },
  },
  plugins: [],
})

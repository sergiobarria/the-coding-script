const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      orange: colors.orange,
    },
    extend: {
      typography: {
        xl: {
          css: {
            h2: {
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            },
            h3: {
              letterSpacing: "0",
            },
            p: {
              fontSize: "1.25rem",
              marginTop: "0",
              marginBottom: "0",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
            },
            blockquote: {
              fontSize: "1.5rem",
            },
          },
        },
        DEFAULT: {
          css: {
            p: {
              marginTop: "0",
              marginBottom: "0",
            },
            h1: {
              marginBottom: "1rem",
            },
            blockquote: {
              fontFamily: "Caveat",
              fontSize: "1.25rem",
              borderLeftColor: "#FBBF24",
            },
          },
        },
      },
      fontFamily: {
        sans: ["Titillium Web", ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        "screen-center": "calc(100vh - 5rem - 9rem)",
      },
      height: {
        "h-1-px": "1px",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen-3/4": "calc(100vh - 100vh / 3)",
        "screen-4/5": "calc(100vh - 100vh / 5)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}

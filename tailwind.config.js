module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ['"DM Sans"', "sans-serif"],
      display: ['"DM Sans"', "sans-serif"],
      body: ['"DM Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        "sermas-gray-100": "#FAFAFA",
        "sermas-gray-150": "#F0F0F0",
        "sermas-gray-200": "#1B2126",
        "sermas-green-100": "#E0ECEE",
        "sermas-green-200": "#75C6D3",
        "sermas-green-300": "#109BAD",
        "serms-green-400": "#008292",
      },
    },
  },
  variants: {},
  plugins: [],
};

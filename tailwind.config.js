module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-land': "url('/src/img/header_bg_01.jpeg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

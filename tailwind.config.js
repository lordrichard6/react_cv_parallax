module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-land': "url('/src/img/header_bg_back-min.png')",
        'header-landS': "url('/src/img/header_bg_md_back-min.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

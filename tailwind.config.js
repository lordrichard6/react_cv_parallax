module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-land': "linear-gradient(to bottom, rgba(238, 238, 238, 0.1), rgba(238, 238, 238, 0.9)), url('/src/img/header_bg_back-min.png')",
        'header-landS': "linear-gradient(to bottom, rgba(238, 238, 238, 0.1), rgba(238, 238, 238, 0.9)), url('/src/img/header_bg_md_back-min.png')",
        'ed-01': "linear-gradient(to right, rgba(238, 238, 238, 0.1), rgba(238, 238, 238, 0.9)), url('/src/img/header_bg_back-min.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

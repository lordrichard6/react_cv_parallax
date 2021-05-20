module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-land': "linear-gradient(to bottom, rgba(238, 238, 238, 0.1), rgba(238, 238, 238, 0.9)), url('/src/img/header_bg_back-min.png')",
        'header-land_mobile': "linear-gradient(to bottom, rgba(238, 238, 238, 0.1), rgba(238, 238, 238, 0.9)), url('/src/img/header_bg_md_back-min.png')",
        'about': "url('/src/img/desert-min.jpg')",
        'about-mobile': "url('/src/img/desert_mobile-min.jpg')",
        'projects': "url('/src/img/sea-min.jpg')",
        'projects-mobile': "url('/src/img/sea_mobile-min.jpg')",
        'education': "url('/src/img/forest-min.jpg')",
        'education-mobile': "url('/src/img/forest_mobile-min.jpg')",
        'experience': "url('/src/img/fire-min.jpg')",
        'experience-mobile': "url('/src/img/fire_mobile-min.jpg')",
        'contact': "url('/src/img/ice-min.jpg')",
        'contact-mobile': "url('/src/img/ice_mobile-min.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

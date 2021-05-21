module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-land': "linear-gradient(to bottom, rgba(238, 238, 238, 0.1), rgba(238, 238, 238, 0.9)), url('/src/img/header_bg_back-min.png')",
        'header-land_mobile': "linear-gradient(to bottom, rgba(238, 238, 238, 0.1), rgba(238, 238, 238, 0.9)), url('/src/img/header_bg_md_back-min.png')",
        'about': "url('/src/img/bg_about-min.jpg')",
        'about-mobile': "url('/src/img/bg_about_mobile-min.jpg')",
        'projects': "linear-gradient(to bottom, rgba(2, 5, 10, 0.6), rgba(109, 213, 237, 0.8)), url('/src/img/bg_projects-min.jpg')",
        'projects-mobile': "linear-gradient(to bottom, rgba(34, 147, 176, 0.6), rgba(109, 213, 237, 0.8)), url('/src/img/bg_projects_mobile-min.jpg')",
        'education': "linear-gradient(to bottom, rgba(17, 154, 142, 0.6), rgba(2, 5, 10, 0.8)), url('/src/img/bg_education-min.jpg')",
        'education-mobile': "linear-gradient(to bottom, rgba(17, 154, 142, 0.6), rgba(2, 5, 10, 0.8)), url('/src/img/bg_education_mobile-min.jpg')",
        'experience': "linear-gradient(to bottom, rgba(252, 84, 28, 0.6), rgba(2, 5, 10, 0.9)), url('/src/img/bg_experience-min.jpg')",
        'experience-mobile': "linear-gradient(to bottom, rgba(252, 84, 28, 0.6), rgba(2, 5, 10, 0.9)), url('/src/img/bg_experience_mobile-min.jpg')",
        'contact': "linear-gradient(to bottom, rgba(2, 5, 10, 1), rgba(2, 5, 10, 0.9)), url('/src/img/bg_footer-min.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

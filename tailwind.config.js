module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      skew: {
        "-8": "-8deg",
      },
      backgroundImage: theme => ({
        'header-land': "linear-gradient(to bottom, rgba(238, 238, 238, 0.1), rgba(238, 238, 238, 0.9)), url('/src/img/backgrounds/header_bg_back-min.png')",
        'header-land_mobile': "linear-gradient(to bottom, rgba(238, 238, 238, 0.1), rgba(238, 238, 238, 0.9)), url('/src/img/backgrounds/header_bg_md_back-min.png')",
        'about': "url('/src/img/backgrounds/bg_about-min.jpg')",
        'about-front': "url('/src/img/backgrounds/about_front-min.png ')",
        'about-mobile': "url('/src/img/backgrounds/bg_about_mobile-min.jpg')",
        'projects': "linear-gradient(to right, rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url('/src/img/backgrounds/bg_projects-min.jpg')",
        'projects-mobile': "url('/src/img/backgrounds/bg_projects_mobile-min.jpg')",
        'education': "linear-gradient(to right, rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url('/src/img/backgrounds/bg_education-min.jpg')",
        'education-mobile': "url('/src/img/backgrounds/bg_education_mobile-min.jpg')",
        'experience': "linear-gradient(to right, rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url('/src/img/backgrounds/bg_experience-min.jpg')",
        'experience-mobile': "url('/src/img/backgrounds/bg_experience_mobile-min.jpg')",
        'skills': "linear-gradient(to right, rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url('/src/img/backgrounds/bg_skills-min.jpg')",
        'contact': "linear-gradient(to bottom, rgba(2, 5, 10, 0.9), rgba(2, 5, 10, 0.9)), url('/src/img/backgrounds/bg_footer-min.jpg')",
        'CardBg':'#03446A',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

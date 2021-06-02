// IMPORTS
import pic01 from "img/education_01-min.jpg";
import pic02 from "img/education_02-min.jpg";
import pic03 from "img/education_03-min.jpg";
import pic04 from "img/education_04-min.jpg";
import pic05 from "img/education_05-min.jpg";
import pic01_wide from "img/education_wide_01-min.jpg";
import pic02_wide from "img/education_wide_02-min.jpg";
import pic03_wide from "img/education_wide_03-min.jpg";
import pic04_wide from "img/education_wide_04-min.jpg";
import pic05_wide from "img/education_wide_05-min.jpg";

// TEXT ------------------------------------------------------------------------------------------
// Header and skills ---------------------------------------------------------------
export const parallaxText = [
  {
    line_01: "My name is Paulo Reizinho",
    line_02: "I am a developer",
    line_03: "Welcome to my page",
    line_04: "...",
    line_05: "looks pretty cool i know",
    line_06: "scroll down to see more",
    line_07: "...",
    line_08: "no need to stay here all day",
  },
  {
    line_01: "This are the tech that i can work with",
    line_02: "HTML, CSS and JS are the base",
    line_03: "Every developer should know those",
    line_04: "React is awesome, ",
    line_05: "Next is a React jewel",
    line_06: "I can do magic with photoshop",
    line_07: "...",
    line_08: "reboot",
  }
];

// About ---------------------------------------------------------------
export const story = {
  text_01:
    "My name is Paulo Reizinho, is was born in 1986 in a small town in the middle of Africa. I currently living in Swiss land more precisely in Zurich. I took Administration with focus in accounting but thing is, I love coding and the challenges that come with it but I found it much later, but is never to late to create great things provided that you have what it takes.",
  text_02:
    "Ok, I wasn't born in Africa but in Portugal, but the the rest is true 😆. Well, I've been learning web Development since 2019 with highs and lows, took the self thought route because my financial situation didn't allow to do a bootcamp or more.",
  text_03:
    "My main tech is React and my main focus is Front End, but my learning journey will never stop.  Disclaimer, I recently got interested in blockchain and it's ecosytem.",
};

// Projects ---------------------------------------------------------------
export const projectsInfo = [
  {
    // img: {img01},
    title: "Previous portfolio",
    link: "https://reizinhocv.netlify.app/",
    text: "React",
    git: "https://github.com/lordrichard6/reactCV",
  },
  {
    // img: {img02},
    title: "Hulu clone",
    link: "https://hulu-clone-rosy.vercel.app/",
    text: "React",
    git: "https://github.com/lordrichard6/hulu_clone",
  },
  {
    // img: {img03},
    title: "Paul's Engine",
    link: "https://paul-search.vercel.app/",
    text: "React",
    git: "https://github.com/lordrichard6/paul-search",
  },
  {
    // img: {img04},
    title: "Skytours",
    link: "https://reizinho-skytours.netlify.com/",
    text: "React",
    git: "https://github.com/lordrichard6/skytours",
  },
  {
    // img: {img05},
    title: "Monkey Circus",
    link: "https://monkeycircus-2z4e865i4.now.sh",
    text: "Next.js",
    git: "https://github.com/lordrichard6/monkeycircus",
  },
  {
    // img: {img06},
    title: "Face Detection App",
    link: "https://pauloreizinho-facerecognition.netlify.com/",
    text: "React, Image recognition API",
    git: "https://github.com/lordrichard6/faceRecognition",
  },
  {
    // img: {img07},
    title: "RoboFriends",
    link: "https://lordrichard6.github.io/robofriends/",
    text: "React",
    git: "https://github.com/lordrichard6/robofriends",
  },
  {
    // img: {img08},
    title: "To Do",
    link: "https://lordrichard-svelte-todo.netlify.com/",
    text: "Svelte 3",
    git: "https://github.com/lordrichard6/svelte_todo",
  },
  {
    // img: {img09},
    title: "Netflix Copy",
    link: "https://pauloreizinho-netflix.netlify.com/",
    text: "HTML5, CSS, JavaScript",
    git: "https://github.com/lordrichard6/netflix_landingpage",
  },
  {
    // img: {img10},
    title: "FlappyBird",
    link: "https://pauloreizinho-flappybird.netlify.com/",
    text: "Vanila JS, HTML, CSS, Game",
    git: "https://github.com/lordrichard6/flappyProj",
  }
]

// EDUCATION ---------------------------------------------------------------


export const courses = 
  [
    {
      img_w: pic01_wide,
      img_m: pic01,
      title: "Administration",
      from: "Sep 05",
      to: "Sep 08",
      where: "IEFP Portugal",
      text: "Administration in a professional school of Ponte de Sor where studied accounting, mathematics, business, etc. and worked for a year as a intern secretary/accountant."
    },
    {
      img_w: pic02_wide,
      img_m: pic02,
      title: "The Complete Web Developer in 2019 - Zero to Mastery",
      from: "Apr 19",
      to: "Sep 19",
      where: "Udemy",
      text: "A course with 37 hours that gave me knowledge in HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, React.js with Redux, PostgressSQL, SQL."
    },
    {
      img_w: pic03_wide,
      img_m: pic03,
      title: "CS50 - Introdution to Computer Science",
      from: "Dez 19",
      to: "Mar 20",
      where: "EDX",
      text: "Excelente course which goes deep in the basic concepts of computer science such as algorithms and data structures, also C, Python and SQL."
    },
    {
      img_w: pic04_wide,
      img_m: pic04,
      title: "Modern React with redux",
      from: "Dez 20",
      to: "Mar 21",
      where: "Udemy",
      text: "52 hours of intense pain with advanced concepts of REACT.js with redux."
    },
    {
      img_w: pic05_wide,
      img_m: pic05,
      title: "Advanced CSS and Sass",
      from: "Jan 21",
      to: "Mar 21",
      where: "Udemy",
      text: "This course teaches tons of modern CSS techniques, advanced CSS animations, Flexbox layouts, CSS Grid layouts and more. 28h in total."
    }
  ]

// Experience ---------------------------------------------------------------
export const job = [
  {
    title: "Front-end engineer",
    link: "https://feinheit.ch/",
    company: "Feinheit",
    from: "Aug 19",
    to: "Feb 20",
    text: "My first professional experience as a Front End Web Developer, where i worked mainly with HTML and SASS but learn Python with Django which was our main tool."
  }
]

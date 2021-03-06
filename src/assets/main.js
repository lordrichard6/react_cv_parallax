// IMPORTS
// ABOUT
import {
  Card_01,
  Card_02,
  Card_03,
  Popup_01,
  Popup_02,
  Popup_03
} from "assets/imports";

import {
  Card_mobile_01,
  Card_mobile_02,
  Card_mobile_03,
  Popup_mobile_01,
  Popup_mobile_02,
  Popup_mobile_03,
} from "assets/imports";

// EDUCATION
import { pic01, pic02, pic03, pic04, pic05 } from 'assets/imports';
import { pic01_wide, pic02_wide, pic03_wide, pic04_wide, pic05_wide } from 'assets/imports';


// TEXT ------------------------------------------------------------------------------------------
// Header and skills ---------------------------------------------------------------

export const parallaxText = [
  {
    line_01: "My name is Paulo Reizinho",
    line_02: "I am a developer",
    line_03: "Welcome to my page",
    line_04: "...",
    line_05: "looks pretty cool I know",
    line_06: "scroll down to see more",
    line_07: "...",
    line_08: "no need to stay here all day",
  },
  {
    line_01: ">Hello there,",
    line_02: ">These are my powers",
    line_03: ">...",
    line_04: ">React is my wife, ",
    line_05: ">Next is my mistress",
    line_06: ">I love creating",
    line_07: ">...",
    line_08: ">reboot",
  }
];

// About ---------------------------------------------------------------
export const story = [
  {
    cardImg: Card_01,
    cardImg_m: Card_mobile_01,
    alt: "me in the jungle",
    popupImg: Popup_01,
    popupImg_m: Popup_mobile_01,
    text: "My name is Paulo Reizinho, is was born in 1986 in a small town in the middle of Africa. I currently living in Swiss land more precisely in Zurich. I took Administration with focus in accounting but thing is, I love coding and the challenges that come with it but I found it much later, but is never to late to create great things provided that you have what it takes.",
  },
  {
    cardImg: Card_02,
    cardImg_m: Card_mobile_02,
    alt: "sea",
    popupImg: Popup_02,
    popupImg_m: Popup_mobile_02,
    text: "Ok, I wasn't born in Africa but in Portugal, but the the rest is true. Well, I've been learning web Development since 2019 with highs and lows."
  },
  {
    cardImg: Card_03,
    cardImg_m: Card_mobile_03,
    alt: "desert",
    popupImg: Popup_03,
    popupImg_m: Popup_mobile_03,
    text: "My main tech is React and my main focus is Front End, but my learning journey will never stop. I recently got interested in blockchain and it's ecosytem."
  },
];

// Projects ---------------------------------------------------------------
export const projectsInfo = [
  {
    // img: {img01},
    title: "Previous portfolio",
    link: "https://reizinhocv.netlify.app/",
    text: "Created with React.js with and elengant and simplistic design",
    git: "https://github.com/lordrichard6/reactCV",
  },
  {
    // img: {img02},
    title: "Hulu clone",
    link: "https://hulu-clone-rosy.vercel.app/",
    text: "Built with Next.js imitating the design of the famous movie streaming platform Hulu, using the API of database movie site TMDB.",
    git: "https://github.com/lordrichard6/hulu_clone",
  },
  {
    // img: {img03},
    title: "Paul's Engine",
    link: "https://paul-search.vercel.app/",
    text: "A project build with Next.js using the google search API.",
    git: "https://github.com/lordrichard6/paul-search",
  },
  {
    // img: {img04},
    title: "Skytours",
    link: "https://reizinho-skytours.netlify.com/",
    text: "This project was initially built using html and Sass, then later I converted to React maintaning the Sass styling system, elegant design of a tours agency",
    git: "https://github.com/lordrichard6/skytours",
  },
  {
    // img: {img05},
    title: "Monkey Circus",
    link: "https://monkeycircus-2z4e865i4.now.sh",
    text: "A mocking E-comerce to sell monkeys, with a credit card payment implemented",
    git: "https://github.com/lordrichard6/monkeycircus",
  },
  {
    // img: {img06},
    title: "Face Detection App",
    link: "https://pauloreizinho-facerecognition.netlify.com/",
    text: "Built with React, a simple application the has you fetching a link of an image then using the clarify API detects the face of the picture.",
    git: "https://github.com/lordrichard6/faceRecognition",
  },
  {
    // img: {img07},
    title: "RoboFriends",
    link: "https://lordrichard6.github.io/robofriends/",
    text: "A real time search of a local database made with react",
    git: "https://github.com/lordrichard6/robofriends",
  },
  {
    // img: {img08},
    title: "To Do",
    link: "https://lordrichard-svelte-todo.netlify.com/",
    text: "My first and only todo app built with svelte3",
    git: "https://github.com/lordrichard6/svelte_todo",
  },
  {
    // img: {img09},
    title: "Netflix Copy",
    link: "https://pauloreizinho-netflix.netlify.com/",
    text: "My attempt to copy the Netflix site only with html, css and javascript made in my first year.",
    git: "https://github.com/lordrichard6/netflix_landingpage",
  },
  {
    // img: {img10},
    title: "FlappyBird",
    link: "https://pauloreizinho-flappybird.netlify.com/",
    text: "The classic flappybird with vanilla javascript.",
    git: "https://github.com/lordrichard6/flappyProj",
  },
  {

    title: "ThreeJS",
    link: "https://lordrichard-threejs-sphere.netlify.app/",
    text: "My first play with Three.js",
    git: "https://github.com/lordrichard6/threejs_sphere",
  },
  {

    title: "FastRent",
    link: "https://lordrichard-rentfast.netlify.app/",
    text: "A beautifull car rental website made with React using typescript",
    git: "https://github.com/lordrichard6/rent-fast",
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
      text: "Administration thought me basic accounting, mathematics, business, etc. in which I worked for a year as a intern secretary/accountant."
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
    text: "My first professional experience as a Front End Web Developer, where I worked mainly with HTML and SASS but learn Python with Django which was our main tool."
  }
]

import React, { useState, useEffect } from "react";
// import ReactTypingEffect from "react-typing-effect";
import styled from "styled-components";

// import { parallaxText } from "assets/text";

import {
  me,
  first,
  firstMobile,
  second,
  secondMobile,
  third,
  thirdMobile,
} from "assets/imports";

const Header = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Hero>
      <img
        className="md:h-1/2 lg:h-3/4 z-30 mb-20"
        src={me}
        alt="me"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <img className="hidden lg:block z-40" src={first} alt="forest" />
      <img
        className="block lg:hidden bottom-0 z-40"
        src={firstMobile}
        alt="forest mobile"
      />
      <img
        className="hidden lg:block z-20"
        src={second}
        alt="mount"
        style={{ transform: `translateY(${offsetY * -0.1}px)` }}
      />
      <img
        className="block lg:hidden bottom-0 z-20"
        src={secondMobile}
        alt="mount mobile"
        style={{ transform: `translateY(${offsetY * -0.1}px)` }}
      />
      <img
        className="hidden lg:block z-10"
        src={third}
        alt="mountains"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />
      <img
        className="block lg:hidden bottom-0 z-10"
        src={thirdMobile}
        alt="mountains mobile"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />
      <Title>
        <h1>const name = "Paulo Reizinho"</h1>
        <h1>console.log(name)</h1>
        <h1>{'>DEV'}</h1>
      </Title>
      
      {/* <ReactTypingEffect
        className="typingeffect absolute bottom-10 z-50 blur-sm subpixel-antialiased text-white text-2xl xl:text-6xl inset-x-1/4 lg:inset-x-auto"
        text={[
          parallaxText[0].line_01,
          parallaxText[0].line_02,
          parallaxText[0].line_03,
          parallaxText[0].line_04,
          parallaxText[0].line_05,
          parallaxText[0].line_06,
          parallaxText[0].line_07,
          parallaxText[0].line_08,
        ]}
        speed={100}
        eraseDelay={700}
        style={{ transform: `translateY(${offsetY * -0.3}px)` }}
      /> */}
    </Hero>
  );
};

export default Header;

const Hero = styled.div.attrs({
  className:
    "relative h-screen flex flex-col justify-center flex-wrap content-center bg-header-land_mobile lg:bg-header-land bg-cover",
})`
   max-height: 100vh;

   img:nth-child(1) {
     /* display: none; */
   }

   /* img:nth-child(odd) {
    display: none;
   }

   img:nth-child(even) {
    display: block;
   } */
  
  & {
    img:not(:first-child) {
      position: absolute;
      width: 100%;
    }
  }
`;

const Title = styled.div`
  color: white;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 900;
  letter-spacing: -0.05rem;
  z-index: 40;
  position: absolute;
  left: 2.5rem; /* 40px */
  top: 2rem;
  /* bottom: 8rem; 128px */

  h1 {
    background-color: rgba(75, 85, 99, 0.75);
    border-radius: 0.3rem;
    transform-origin: left;

    :not(:first-child) {
      width: min-content;
      font-size: 2rem;
      /* transform: rotate(45deg); */
    }
    :last-child {
      margin-top: 1.5rem;
      /* transform: rotate(90deg); */
      font-size: 5rem;
    }
  }

  @media (min-width: 768px) {
    font-size: 3.25rem;
    line-height: 3.5rem;

    h1 {
      /* font-size: 1rem;
      line-height: 3rem; */

      :not(:first-child) {
      font-size: 4rem;
      /* transform: rotate(45deg); */
      }

      :last-child {
      /* margin-top: 1.5rem; */
      /* transform: rotate(90deg); */
      font-size: 6rem;
    }

    }
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    line-height: 1;
    left: 5rem; /* 80px */
    top: 1rem; 
  }
  @media (min-width: 1536px) {
    font-size: 6rem;
    line-height: 1;
    left: 13rem; /* 208px */
    top: 5rem;
  }

`

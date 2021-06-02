import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import styled from "styled-components";
import tw from "twin.macro";

import { parallaxText } from "assets/text";

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
    <Hero className="max-h-screen">
      <img
        className="h-1/2 md:h-3/4 z-30 mb-20"
        src={me}
        alt="me"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <img className="hidden md:block z-40" src={first} alt="forest" />
      <img
        className="block md:hidden bottom-0 z-40"
        src={firstMobile}
        alt="forest mobile"
      />
      <img
        className="hidden md:block z-20"
        src={second}
        alt="mount"
        style={{ transform: `translateY(${offsetY * -0.1}px)` }}
      />
      <img
        className="block md:hidden bottom-0 z-20"
        src={secondMobile}
        alt="mount mobile"
        style={{ transform: `translateY(${offsetY * -0.1}px)` }}
      />
      <img
        className="hidden md:block z-10"
        src={third}
        alt="mountains"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />
      <img
        className="block md:hidden bottom-0 z-10"
        src={thirdMobile}
        alt="mountains mobile"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />
      <ReactTypingEffect
        className="typingeffect absolute bottom-10 z-50 blur-sm subpixel-antialiased text-white text-2xl xl:text-6xl inset-x-1/4 md:inset-x-auto"
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
      />
    </Hero>
  );
};

export default Header;

const Hero = styled.div.attrs({
  className:
    "relative h-screen flex flex-col justify-center flex-wrap content-center bg-header-land_mobile md:bg-header-land bg-cover",
})`
  & {
    img:not(:first-child) {
      ${tw`w-full absolute`}
    }
  }
`;

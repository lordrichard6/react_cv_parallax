import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";

import { Hero } from "../styles/App";

import me from "img/logo_me-min.png";
import first from "img/header_bg_front-min.png";
import firstMobile from "img/header_bg_md_front-min.png";
import second from "img/header_bg_front_m-min.png";
import secondMobile from "img/header_bg_md_front_m-min.png";
import third from "img/header_bg_back_m-min.png";
import thirdMobile from "img/header_bg_md_back_m-min.png";

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
        className="h-1/2 md:h-3/4 z-30 mb-20"
        src={me}
        alt="me"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <img 
        src={first} 
        alt="forest" 
        className="hidden md:block z-40" 
      />
      <img
        src={firstMobile}
        alt="forest mobile"
        className="block md:hidden bottom-0 z-40"
      />
      <img
        src={second}
        alt="mount"
        className="hidden md:block z-20"
        style={{ transform: `translateY(${offsetY * -0.1}px)` }}
      />
      <img
        src={secondMobile}
        alt="mount mobile"
        className="block md:hidden bottom-0 z-20"
        style={{ transform: `translateY(${offsetY * -0.1}px)` }}
      />
      <img
        src={third}
        alt="mountains"
        className="hidden md:block z-10"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />
      <img
        src={thirdMobile}
        alt="mountains mobile"
        className="block md:hidden bottom-0 z-10"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />
      <ReactTypingEffect
        className="typingeffect absolute bottom-10 z-50 blur-sm subpixel-antialiased text-white text-2xl xl:text-6xl inset-x-1/4 md:inset-x-auto"
        text={[
          "My name is Paulo Reizinho",
          "I am a developer",
          "Welcome to my page",
          "...",
          "looks pretty cool i know",
          "scroll down to see more",
          "...",
          "no need to stay here all day",
        ]}
        speed={100}
        eraseDelay={700}
        style={{ transform: `translateY(${offsetY * -0.3}px)` }}
      />
    </Hero>
  );
};

export default Header;

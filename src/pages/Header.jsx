import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";

import main from "../img/logo_me-min.png";
import front from "../img/header_bg_front-min.png";
import frontS from "../img/header_bg_md_front-min.png";
import frontM from "../img/header_bg_front_m-min.png";
import frontMS from "../img/header_bg_md_front_m-min.png";
import backM from "../img/header_bg_back_m-min.png";
import backMS from "../img/header_bg_md_back_m-min.png";

const Header = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center flex-wrap content-center bg-header-land_mobile md:bg-header-land bg-cover">
      <img
        className="h-1/2 md:h-3/4 z-30 mb-20"
        src={main}
        alt="me"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <img
        src={front}
        alt="front set"
        className="hidden md:block md:w-full absolute z-40"
        // style={{ transform: `translateY(${offsetY * -0.1}px)` }}
      />
      <img //Mobile
        src={frontS}
        alt="front set"
        className="block md:hidden md:w-full absolute bottom-0 z-40"
        // style={{ transform: `translateY(${offsetY * -0.1}px)` }}
      />
      <img
        src={frontM}
        alt="front set"
        className="hidden md:block w-full absolute z-20"
        style={{ transform: `translateY(${offsetY * -0.1}px)` }}
      />
      <img //Mobile
        src={frontMS}
        alt="front set"
        className="block md:hidden w-full absolute bottom-0 z-20"
        style={{ transform: `translateY(${offsetY * -0.1}px)` }}
      />
      <img
        src={backM}
        alt="front set"
        className="hidden md:block w-full absolute z-10"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />
      <img //Mobile
        src={backMS}
        alt="front set"
        className="block md:hidden w-full absolute bottom-0 z-10"
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
    </div>
  );
};

export default Header;

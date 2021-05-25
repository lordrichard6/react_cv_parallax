import { Parallax } from "react-scroll-parallax";
import React, { useState, useEffect } from "react";

import { Section, Title } from "app.styles.tw";

import title from "img/about_me-min.png";
import me1 from "img/about_me_02-min.png";

const About = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section className="bg-about-mobile md:bg-about">
      {/* title */}
      <Title>
        <Parallax
          y={[-60, 60]}
          x={[20, -20]}
          className="h-20 md:w-1/3 md:h-auto z-40 mt-20 md:mt-40 2xl:mt-20 mb-12 md:mb-10"
        >
          <img src={title} alt="title" />
        </Parallax>
      </Title>

      <div className="p-2 relative 2xl:px-40 mb-20">
        <h2 className="italic tracking-widest text-2xl md:text-3xl mt-10 mb-5">
          Ola pessoal,
        </h2>
        <div className="flex flex:col flex-wrap md:flex-row justify-center">
          <p className="md:flex-1 mb-10 md:mb-0 pt-10 leading-relaxed text-white text-xl md:text-2xl 2xl:text-4xl">
            My name is Paulo Reizinho, I'm portuguese but living in Swiss land
            more precisely in Zurich. I took Administration with focus in
            accounting but thing is, I love coding and the challenges that come
            with it but I found it much later, but is never to late to create
            great things provided that you have what it takes.
            <br />
            Well, I've been learning web Development since 2019 with highs and
            lows, took the self-thought route because my financial situation
            didn't allow to do a bootcamp or more.
            <br />
            My main tech is React and my main focus is Front End, but my
            learning journey will never stop.
            <br />
            Disclaimer, I recently got interested in blockchain and it's
            ecosytem.
          </p>
          <img
            src={me1}
            alt="title"
            className="hidden md:block h-80 md:w-1/3 md:h-auto md:flex-1 2xl:flex-none rounded-full shadow-2xl"
            style={{ transform: `translateY(${offsetY * -0.2}px)` }}
          />
        </div>
      </div>
    </Section>
  );
};

export default About;

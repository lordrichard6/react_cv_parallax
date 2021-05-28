import { Parallax } from "react-scroll-parallax";
import React, { useState } from "react";
import styled from "styled-components";

import { Section, Title } from "../styles/App";
import AboutPopup from "../components/AboutPopup";

import title from "img/about_me-min.png";
// import me1 from "img/about_me_02-min.png";
import Card_01 from "img/about_me_01-min.png";
import Card_02 from "img/about_me_02-min.png";
import Card_03 from "img/about_me_03-min.png";
import Popup_01 from "img/about_me_wide_01-min.png";
import Popup_02 from "img/about_me_wide_02-min.png";
import Popup_03 from "img/about_me_wide_03-min.png";
import Card_mobile_01 from "img/about_me_mobile_01-min.png";
import Card_mobile_02 from "img/about_me_mobile_02-min.png";
import Card_mobile_03 from "img/about_me_mobile_03-min.png";
import Popup_mobile_01 from "../img/about_me_popup_mobile_01-min.png";
import Popup_mobile_02 from "../img/about_me_popup_mobile_02-min.png";
import Popup_mobile_03 from "../img/about_me_popup_mobile_03-min.png";

const About = () => {
  const [popup1, setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [popup3, setPopup3] = useState(false);

  const story = {
    text_01:
      "My name is Paulo Reizinho, is was born in 1986 in a small town in the middle of Africa. I currently living in Swiss land more precisely in Zurich. I took Administration with focus in accounting but thing is, I love coding and the challenges that come with it but I found it much later, but is never to late to create great things provided that you have what it takes.",
    text_02:
      "Ok, i wasn't born in Africa but in Portugal, but the the rest is true 😆. Well, I've been learning web Development since 2019 with highs and lows, took the self-thought route because my financial situation didn't allow to do a bootcamp or more.",
    text_03:
      "My main tech is React and my main focus is Front End, but my learning journey will never stop.  Disclaimer, I recently got interested in blockchain and it's ecosytem.",
  };

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

      <div className="min-h-screen p-2 relative 2xl:px-40 mb-20 max-w-screen">
        <div className="hidden md:flex flex-row flex-wrap justify-center content-center">
          <AboutCard
            onClick={() => setPopup1(true)}
            src={Card_01}
            alt="me in the jungle"
          />
          <AboutCard onClick={() => setPopup2(true)} src={Card_02} alt="sea" />
          <AboutCard
            onClick={() => setPopup3(true)}
            src={Card_03}
            alt="desert"
          />
          <AboutPopup
            trigger={popup1}
            setTrigger={setPopup1}
            image={Popup_01}
            text={story.text_01}
          />
          <AboutPopup
            trigger={popup2}
            setTrigger={setPopup2}
            image={Popup_02}
            text={story.text_02}
          />
          <AboutPopup
            trigger={popup3}
            setTrigger={setPopup3}
            image={Popup_03}
            text={story.text_03}
          />
        </div>

{/* MOBILE ----------------------------------------------------------------------------------------------------- */}
        <div className="flex md:hidden flex-col flex-wrap justify-center content-center">
          <AboutCard
            onClick={() => setPopup1(true)}
            src={Card_mobile_01}
            alt="me in the jungle"
          />
          <AboutCard onClick={() => setPopup2(true)} src={Card_mobile_02} alt="sea" />
          <AboutCard
            onClick={() => setPopup3(true)}
            src={Card_mobile_03}
            alt="desert"
          />
          <AboutPopup
            trigger={popup1}
            setTrigger={setPopup1}
            image={Popup_mobile_01}
            text={story.text_01}
          />
          <AboutPopup
            trigger={popup2}
            setTrigger={setPopup2}
            image={Popup_mobile_02}
            text={story.text_02}
          />
          <AboutPopup
            trigger={popup3}
            setTrigger={setPopup3}
            image={Popup_mobile_03}
            text={story.text_03}
          />
        </div>
      </div>
    </Section>
  );
};

export default About;

const AboutCard = styled.img.attrs({
  className: "w-screen py-4 md:w-1/3 filter hover:animate-none transition duration-500 ease-in",
})`
  & {
    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    transition-duration: 200ms;

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .8;
      }
  }
  :hover {
    --tw-blur: blur(1px);
  }
`;

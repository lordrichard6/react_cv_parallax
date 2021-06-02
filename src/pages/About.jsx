import { Parallax } from "react-scroll-parallax";
import React, { useState } from "react";
import styled from "styled-components";

import { Section, Title } from "styles/App";
import AboutPopup from "components/AboutPopup";
import { story } from "assets/text";

import {
  Card_01,
  Card_02,
  Card_03,
  Popup_01,
  Popup_02,
  Popup_03,
  Card_mobile_01,
  Card_mobile_02,
  Card_mobile_03,
  Popup_mobile_01,
  Popup_mobile_02,
  Popup_mobile_03,
} from "./index";

const About = () => {
  const [popup1, setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [popup3, setPopup3] = useState(false);

  const aboutCard = [
    {
      click: () => setPopup1(true),
      src: Card_01,
      src_m: Card_mobile_01,
      alt: "me in the jungle"
    },
    {
      click: () => setPopup2(true),
      src: Card_02, 
      src_m: Card_mobile_02,
      alt: "sea", 
    },
    {
      click: () => setPopup3(true),
      src: Card_03, 
      src_m: Card_mobile_03,
      alt: "desert",
    }
  ]

  const popups = [
    {
      trigger: popup1,
      setTrigger: setPopup1,
      image: Popup_01,
      image_m: Popup_mobile_01,
      text: story.text_01,
    },
    {
      trigger: popup2,
      setTrigger: setPopup2,
      image: Popup_02,
      image_m: Popup_mobile_02,
      text: story.text_02,
    },
    {
      trigger: popup3,
      setTrigger: setPopup3,
      image: Popup_03,
      image_m: Popup_mobile_03,
      text: story.text_03,
    }
  ]

  return (
    <Section className="bg-about-mobile md:bg-about">
      <Title className="md:mt-52 2xl:mt-64">
        <Parallax y={[-60, 60]} x={[0, -20]} className="z-40">
          <h1 className="text-pink-700 text-6xl xl:text-8xl">about</h1>
        </Parallax>
        <Parallax y={[60, -60]} x={[0, -20]} className="z-40">
          <h1 className="text-blue-500 text-7xl xl:text-9xl">Me</h1>
        </Parallax>
      </Title>

      <Container>
        <Desktop>
          {
            aboutCard.map((n) => {
              return (
                <AboutCard
                onClick={n.click}
                src={n.src}
                alt={n.alt}
          />
              )
            })
          }
          {
            popups.map((n) => {
              return (
                <AboutPopup
                trigger={n.trigger}
                setTrigger={n.setTrigger}
                image={n.image}
                text={n.text}
          />
              )
            })
          }
        </Desktop>

        {/* MOBILE ----------------------------------------------------------------------------------------------------- */}
        <Mobile>
        {
            aboutCard.map((n) => {
              return (
                <AboutCard
                onClick={n.click}
                src={n.src_m}
                alt={n.alt}
          />
              )
            })
          }
          {
            popups.map((n) => {
              return (
                <AboutPopup
                trigger={n.trigger}
                setTrigger={n.setTrigger}
                image={n.image_m}
                text={n.text}
          />
              )
            })
          }
        </Mobile>
      </Container>
    </Section>
  );
};

export default About;

const Container = styled.div.attrs({
  className: "min-h-screen p-2 relative 2xl:px-40 mb-20 max-w-screen",
})``;

const Mobile = styled.div.attrs({
  className: "flex md:hidden flex-col flex-wrap justify-center content-center",
})``;

const Desktop = styled.div.attrs({
  className: "hidden md:flex flex-row flex-wrap justify-center content-center",
})``;

const AboutCard = styled.img.attrs({
  className:
    "w-screen py-4 md:w-1/3 filter transform hover:-translate-y-2 hover:animate-none transition duration-500 ease-in",
})`
  & {
    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    transition-duration: 200ms;

    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.8;
      }
    }
    :hover {
      --tw-blur: blur(1px);
    }
  }
`;

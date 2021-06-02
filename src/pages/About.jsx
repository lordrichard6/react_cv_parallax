import { Parallax } from "react-scroll-parallax";
import React, { useState } from "react";
import styled from "styled-components";

import { Section, Title } from "styles/App";
import AboutPopup from "components/AboutPopup";
import { story } from "assets/text";

const About = () => {
  const [popup1, setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [popup3, setPopup3] = useState(false);

  const connect = [
    {
      click: () => setPopup1(true),
      src: story[0].cardImg,
      src_m: story[0].cardImg_m,
      alt: "me in the jungle",
      trigger: popup1,
      setTrigger: setPopup1,
      image: story[0].popupImg,
      image_m: story[0].popupImg_m,
      text: story[0].text,
    },
    {
      click: () => setPopup2(true),
      src: story[1].cardImg,
      src_m: story[1].cardImg_m,
      alt: "sea",
      trigger: popup2,
      setTrigger: setPopup2,
      image: story[1].popupImg,
      image_m: story[1].popupImg_m,
      text: story[1].text,
    },
    {
      click: () => setPopup3(true),
      src: story[2].cardImg,
      src_m: story[2].cardImg_m,
      alt: "desert",
      trigger: popup3,
      setTrigger: setPopup3,
      image: story[2].popupImg,
      image_m: story[2].popupImg_m,
      text: story[2].text,
    },
  ];

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
          {connect.map((n) => {
            return <AboutCard onClick={n.click} src={n.src} alt={n.alt} />;
          })}
          {connect.map((n) => {
            return (
              <AboutPopup
                trigger={n.trigger}
                setTrigger={n.setTrigger}
                image={n.image}
                text={n.text}
              />
            );
          })}
        </Desktop>

        {/* MOBILE ----------------------------------------------------------------------------------------------------- */}
        <Mobile>
          {connect.map((n) => {
            return <AboutCard onClick={n.click} src={n.src_m} alt={n.alt} />;
          })}
          {connect.map((n) => {
            return (
              <AboutPopup
                trigger={n.trigger}
                setTrigger={n.setTrigger}
                image={n.image_m}
                text={n.text}
              />
            );
          })}
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

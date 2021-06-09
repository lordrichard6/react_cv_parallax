import { Parallax } from "react-scroll-parallax";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";
import tw from "twin.macro";
import "react-slideshow-image/dist/styles.css";

import EducationCard from "components/EducationCard";
import { courses } from "assets/main";
import BgImg from '../img/backgrounds/bg_education-min.jpg'

const Education = () => {
  return (
    <Section>
      <Title>
        <Parallax y={[-40, 40]} x={[-45, 0]}>
          <h1>education();</h1>
        </Parallax>
      </Title>
      <EducationContainer>
        <SlideContainer>
          <Slide easing="ease" className="contents lg:hidden">
            {courses.map((n) => {
              return (
                <EducationCard
                  img={n.img_m}
                  title={n.title}
                  from={n.from}
                  to={n.to}
                  where={n.where}
                  text={n.text}
                />
              );
            })}
          </Slide>
          <Slide easing="ease" className="hidden lg:contents">
            {courses.map((n) => {
              return (
                <EducationCard
                  img={n.img_w}
                  title={n.title}
                  from={n.from}
                  to={n.to}
                  where={n.where}
                  text={n.text}
                />
              );
            })}
          </Slide>
        </SlideContainer>
      </EducationContainer>
    </Section>
  );
};

export default Education;

const Section = styled.section`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)),  url(${BgImg});
  ${tw`
    py-2 
    px-2 
    lg:p-6 
    bg-center 
    bg-cover
  `}
`;

const Title = styled.div`
  ${tw`
  w-full 
  lg:mt-52 
  2xl:mt-72 
  flex 
  flex-row 
  justify-center 
  my-28 
  subpixel-antialiased 
  font-black 
  text-4xl 
  lg:text-9xl
  `}

  h1 {
    ${tw`
      text-green-400 
      text-5xl 
      lg:text-7xl
    `}
  }
`;

const EducationContainer = styled.div`
  ${tw`
  flex 
  flex-col 
  flex-wrap 
  justify-center 
  content-center 
  pb-10 
  2xl:pb-20
  `}
`;

const SlideContainer = styled.div.attrs({
  className: "slide-container",
})`
  ${tw`
    w-4/5 
    lg:w-3/4 
    2xl:w-2/3 
    rounded-lg
  `}
`;
import { Parallax } from "react-scroll-parallax";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";

import EducationCard from "components/EducationCard";
import { Section, Title } from "styles/App";
import {courses} from 'assets/text'

import {
  pic01,
  pic02,
  pic03,
  pic04,
  pic05,
  pic01_wide,
  pic02_wide,
  pic03_wide,
  pic04_wide,
  pic05_wide,
} from "./index";

const Education = () => {
  return (
    <Section className="bg-education">
      <Title className="md:mt-52 2xl:mt-72">
        <Parallax
          y={[-40, 40]}
          x={[-45, 0]}
        >
          <h1 className='text-green-400 text-5xl md:text-7xl'>education();</h1>
        </Parallax>
      </Title>
      <EducationContainer>
        <div className="slide-container w-4/5 md:w-3/4 2xl:w-2/3 rounded-md">
          <Slide easing="ease" className="contents md:hidden">
          {courses.map(n => {
              return (
                <EducationCard
              img={n.img_m}
              title={n.title}
              from={n.from}
              to={n.to}
              where={n.where}
              text={n.text}
            />
              )
            })}
          </Slide>
          <Slide easing="ease" className="hidden md:contents">
            {courses.map(n => {
              return (
                <EducationCard
              img={n.img_w}
              title={n.title}
              from={n.from}
              to={n.to}
              where={n.where}
              text={n.text}
            />
              )
            })}
          </Slide>
        </div>
      </EducationContainer>
    </Section>
  );
};

export default Education;

const EducationContainer = styled.div.attrs({
  className:
    "flex flex-col flex-wrap justify-center content-center pb-10 2xl:pb-20",
})``;

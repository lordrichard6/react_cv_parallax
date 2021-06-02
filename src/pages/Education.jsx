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
            <EducationCard
              img={pic01}
              title={courses[0].title}
              from={courses[0].from}
              to={courses[0].to}
              where={courses[0].where}
              text={courses[0].text}
            />
            <EducationCard
              img={pic02}
              title={courses[1].title}
              from={courses[1].from}
              to={courses[1].to}
              where={courses[1].where}
              text={courses[1].text}
            />
            <EducationCard
              img={pic03}
              title={courses[2].title}
              from={courses[2].from}
              to={courses[2].to}
              where={courses[2].where}
              text={courses[2].text}
            />
            <EducationCard
              img={pic04}
              title={courses[3].title}
              from={courses[3].from}
              to={courses[3].to}
              where={courses[3].where}
              text={courses[3].text}
            />
            <EducationCard
              img={pic05}
              title={courses[4].title}
              from={courses[4].from}
              to={courses[4].to}
              where={courses[4].where}
              text={courses[4].text}
            />
          </Slide>
          <Slide easing="ease" className="hidden md:contents">
            <EducationCard
              img={pic01_wide}
              title={courses[0].title}
              from={courses[0].from}
              to={courses[0].to}
              where={courses[0].where}
              text={courses[0].text}
            />
            <EducationCard
              img={pic02_wide}
              title={courses[1].title}
              from={courses[1].from}
              to={courses[1].to}
              where={courses[1].where}
              text={courses[1].text}
            />
            <EducationCard
              img={pic03_wide}
              title={courses[2].title}
              from={courses[2].from}
              to={courses[2].to}
              where={courses[2].where}
              text={courses[2].text}
            />
            <EducationCard
              img={pic04_wide}
              title={courses[3].title}
              from={courses[3].from}
              to={courses[3].to}
              where={courses[3].where}
              text={courses[3].text}
            />
            <EducationCard
              img={pic05_wide}
              title={courses[4].title}
              from={courses[4].from}
              to={courses[4].to}
              where={courses[4].where}
              text={courses[4].text}
            />
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

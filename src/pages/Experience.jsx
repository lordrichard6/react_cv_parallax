import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

import JobExperience from "components/JobExperience";
import { Section, Title } from "../styles/App";

import title from "img/experience-min.png";


const Experience = () => {
  return (
    <Section className="bg-experience-mobile md:bg-experience">
        <Title className="pt-10">
          <Parallax
            y={[-50, 50]}
            x={[0, -60]}
            className="h-20 md:w-1/3 md:h-auto z-40"
          >
            <img src={title} alt="title"/>
          </Parallax>
        </Title>
        <JobContainer>
          <JobExperience
            title="Front-end engineer"
            link="https://feinheit.ch/"
            company="Feinheit"
            from="Aug 19"
            to="Feb 20"
            text="My first professional experience as a Front End Web Developer, where i worked mainly with HTML and SASS but learn Python with Django which was our main tool."
          />
      </JobContainer>
    </Section>
  );
};

export default Experience;

const JobContainer = styled.div.attrs({
  className: "flex flex-wrap justify-center content-center"
})``;
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

import JobExperience from "components/JobExperience";
import { Section, Title } from "../styles/App";

// import title from "img/experience-min.png";


const Experience = () => {
  return (
    <Section className="bg-experience">
        <Title>
          <Parallax
            y={[-40, 10]}
            x={[-100, 5]}
          >
            {/* <img src={title} alt="title"/> */}
            <h1 className='text-red-600'>{'<h1>'}</h1>
          </Parallax>
          <Parallax
            y={[45, -40]}
            x={[0, -43]}
          >
            {/* <img src={title} alt="title"/> */}
            <h1 className='text-purple-600 md:text-6xl'>experience</h1>
          </Parallax>
          <Parallax
            y={[-40, 0]}
            x={[-100, 0]}
          >
            {/* <img src={title} alt="title"/> */}
            <h1 className='text-red-600'>{'</h1>'}</h1>
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
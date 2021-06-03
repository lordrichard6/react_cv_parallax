import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import tw from 'twin.macro';

import JobExperience from "components/JobExperience";
import { job } from "assets/text";

const Experience = () => {
  return (
    <Section className="bg-experience">
      <Title>
        <Parallax y={[-40, 10]} x={[-100, 5]}>
          <h1 className="text-red-600">{"<h1>"}</h1>
        </Parallax>
        <Parallax y={[45, -40]} x={[0, -43]}>
          <h1 className="text-purple-600 lg:text-6xl">experience</h1>
        </Parallax>
        <Parallax y={[-40, 0]} x={[-100, 0]}>
          <h1 className="text-red-600">{"</h1>"}</h1>
        </Parallax>
      </Title>
      <JobContainer>
        <JobExperience
          title={job[0].title}
          link={job[0].link}
          company={job[0].company}
          from={job[0].from}
          to={job[0].to}
          text={job[0].text}
        />
      </JobContainer>
    </Section>
  );
};

export default Experience;

const JobContainer = styled.div.attrs({
  className: "flex flex-wrap justify-center content-center",
})``;

const Section = styled.section.attrs({
  className: "py-2 px-2 md:p-6 bg-center bg-cover"
})``;

const Title = styled.div.attrs({
  className: "w-full flex flex-row justify-center my-28 md:mb-56 subpixel-antialiased font-black text-4xl lg:text-9xl"
})``;

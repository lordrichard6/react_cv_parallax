import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import tw from "twin.macro";

import JobExperience from "components/JobExperience";
import { job } from "assets/main";

const Experience = () => {
  return (
    <Section className="bg-experience">
      <TitleContainer>
        <Parallax y={[-40, 10]} x={[-100, 5]}>
          <RedTitle>{"<h1>"}</RedTitle>
        </Parallax>
        <Parallax y={[45, -40]} x={[0, -43]}>
          <MiddleTitle>experience</MiddleTitle>
        </Parallax>
        <Parallax y={[-40, 0]} x={[-100, 0]}>
          <RedTitle>{"</h1>"}</RedTitle>
        </Parallax>
      </TitleContainer>
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

const JobContainer = styled.div`
  ${tw`
    flex 
    flex-wrap 
    justify-center 
    content-center
  `}
`;

const Section = styled.section`
  ${tw`
    py-2 
    px-2 
    md:p-6 
    bg-center 
    bg-cover
  `}
`;

const TitleContainer = styled.div`
  ${tw`
    w-full 
    flex 
    flex-row 
    justify-center 
    my-28 
    md:mb-56 
    subpixel-antialiased 
    font-black 
    text-4xl 
    lg:text-9xl
  `}
`;

const RedTitle = styled.h1`
  ${tw`
    text-red-600
  `}
`

const MiddleTitle = styled.h1`
  ${tw`
    text-purple-600 
    lg:text-6xl
  `}
`


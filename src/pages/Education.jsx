import { Parallax } from "react-scroll-parallax";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";
import tw from "twin.macro";
import "react-slideshow-image/dist/styles.css";

import EducationCard from "components/EducationCard";
import { courses } from "assets/text";

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
          <Slide easing="ease" className="contents md:hidden">
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
          <Slide easing="ease" className="hidden md:contents">
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

const Section = styled.section.attrs({
  className: "py-2 px-2 md:p-6 bg-education bg-center bg-cover",
})``;

const Title = styled.div.attrs({
  className:
    "w-full md:mt-52 2xl:mt-72 flex flex-row justify-center my-28 subpixel-antialiased font-black text-4xl md:text-9xl",
})`
  h1 {
    ${tw`text-green-400 text-5xl md:text-7xl`}
  }
`;

const EducationContainer = styled.div.attrs({
  className:
    "flex flex-col flex-wrap justify-center content-center pb-10 2xl:pb-20",
})``;

const SlideContainer = styled.div.attrs({
  className: "slide-container w-4/5 md:w-3/4 2xl:w-2/3 rounded-md",
})``;

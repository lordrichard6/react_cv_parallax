import { Parallax } from "react-scroll-parallax";
import ReactTypingEffect from "react-typing-effect";
import styled from "styled-components";
import tw from "twin.macro";

import { parallaxText } from "assets/main";

import {
  computer,
  nokia,
  css,
  html,
  javascript,
  typescript,
  react,
  next,
  node,
  photoshop,
} from "assets/imports";

const MySkills = () => {
  return (
    <Section className="bg-skills">
      <TitleContainer>
        <Parallax y={[-50, 50]} x={[5, -20]} className="z-40">
          <FirstTitle>if</FirstTitle>
        </Parallax>
        <Parallax y={[40, -60]} x={[5, -25]} className="z-40">
          <SecondTitle>(skills)</SecondTitle>
        </Parallax>
        <Parallax y={[80, -40]} x={[-15, 10]} className="z-40">
          <ThirdTitle>{"{hire}"}</ThirdTitle>
        </Parallax>
      </TitleContainer>
      <SkillContainer>
        <Computer
          src={computer}
          alt="computer"
        />
        <Nokia
          src={nokia}
          alt="nokia"
        />
        <Skills>
          <Skill src={html} alt="html" />
          <Skill src={css} alt="css" />
          <Skill src={javascript} alt="javascript" />
          <Skill src={typescript} alt="typescript" />
          <Skill src={react} alt="react" />
          <Skill src={next} alt="next" />
          <Skill src={node} alt="node" />
          <Skill src={photoshop} alt="photoshop" />
          <TypingContainer>
            <ReactTypingEffect
              className="typingeffect hidden lg:block"
              text={[
                // parallaxText[1].map(n => n),
                parallaxText[1].line_01,
                parallaxText[1].line_02,
                parallaxText[1].line_03,
                parallaxText[1].line_04,
                parallaxText[1].line_05,
                parallaxText[1].line_06,
                parallaxText[1].line_07,
                parallaxText[1].line_08,
              ]}
              speed={100}
              eraseDelay={700}
            />
            <ReactTypingEffect
              className="typingeffect block lg:hidden font-black"
              text={[
                parallaxText[1].line_01,
                parallaxText[1].line_02,
                parallaxText[1].line_03,
                parallaxText[1].line_04,
                parallaxText[1].line_05,
                parallaxText[1].line_06,
                parallaxText[1].line_07,
                parallaxText[1].line_08,
              ]}
              speed={100}
              eraseDelay={700}
            />
          </TypingContainer>
        </Skills>
      </SkillContainer>
    </Section>
  );
};

export default MySkills;

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
    subpixel-antialiased 
    font-black 
    text-4xl 
    lg:text-9xl
  `}
`;

const FirstTitle = styled.h1`
  ${tw`
    text-pink-700
  `}
`;

const SecondTitle = styled.h1`
  ${tw`
    text-blue-500 
    text-6xl 
    lg:text-9xl
  `}
`;

const ThirdTitle = styled.h1`
  ${tw`
    text-yellow-500
  `}
`;

const SkillContainer = styled.div`
  ${tw`
    relative
  `}
`;

const Computer = styled.img`
  ${tw`
    w-96 
    lg:w-auto 
    hidden 
    lg:block
  `}
`;

const Nokia = styled.img`
  ${tw`
    w-full 
    lg:w-auto 
    block 
    lg:hidden
  `}
`;

const Skills = styled.div`
  ${tw`
    absolute 
    -ml-4 
    w-2/5 
    lg:w-1/4 
    flex 
    flex-row 
    flex-wrap 
    top-52 
    md:top-1/3 
    lg:top-44 
    left-1/3 
    lg:left-1/3 
    2xl:top-80 
    transform 
    skew-y-0 
    lg:-skew-y-6 
    2xl:-skew-y-6
  `}
`;

const Skill = styled.img`
  ${tw`
    h-5 
    md:h-10 
    lg:h-auto 
    lg:w-10 
    2xl:w-20 
    m-1 
    lg:m-3 
    2xl:m-6 
    transition 
    duration-150 
    transform 
    hover:scale-150 
    hover:rotate-12
  `}
`;

const TypingContainer = styled.div`
  ${tw`
    w-full 
    lg:mt-20 
    2xl:mt-40 
    lg:text-green-500 
    text-sm 
    md:text-lg 
    lg:text-xl 
    2xl:text-3xl
  `}
`;
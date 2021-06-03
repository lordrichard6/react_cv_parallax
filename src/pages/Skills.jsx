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

const Skills = () => {
  return (
    <Section className="bg-skills">
      <Title>
        <Parallax y={[-50, 50]} x={[5, -20]} className="z-40">
          <h1 className="text-pink-700">if</h1>
        </Parallax>
        <Parallax y={[40, -60]} x={[5, -25]} className="z-40">
          <h1 className="text-blue-500 text-6xl lg:text-9xl">(skills)</h1>
        </Parallax>
        <Parallax y={[80, -40]} x={[-15, 10]} className="z-40">
          <h1 className="text-yellow-500">{"{hire}"}</h1>
        </Parallax>
      </Title>
      <div className="relative">
        <img
          src={computer}
          alt="computer"
          className="w-96 lg:w-auto hidden lg:block"
        />
        <img
          src={nokia}
          alt="nokia"
          className="w-full lg:w-auto block lg:hidden"
        />
        <Skill>
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={javascript} alt="javascript" />
          <img src={typescript} alt="typescript" />
          <img src={react} alt="react" />
          <img src={next} alt="next" />
          <img src={node} alt="node" />
          <img src={photoshop} alt="photoshop" />
          <div className="w-full lg:mt-20 2xl:mt-40 lg:text-green-500 text-sm md:text-lg lg:text-xl 2xl:text-3xl">
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
          </div>
        </Skill>
      </div>
    </Section>
  );
};

export default Skills;

export const Section = styled.section.attrs({
  className: "py-2 px-2 md:p-6 bg-center bg-cover"
})`
  /* & {
      h3 {
          ${tw`italic tracking-widest text-2xl md:text-3xl mt-10 mb-5`}
      }
  } */
`;

export const Title = styled.div.attrs({
  className: "w-full flex flex-row justify-center my-28 subpixel-antialiased font-black text-4xl lg:text-9xl"
})``;

const Skill = styled.div.attrs({
  className:
    "absolute -ml-4 w-2/5 lg:w-1/4 flex flex-row flex-wrap top-52 md:top-1/3 lg:top-44 left-1/3 lg:left-1/3 2xl:top-80 transform skew-0 lg:-skew-y-6 2xl:-skew-y-6",
})`
  img {
    ${tw`h-5 md:h-10 lg:h-auto lg:w-10 2xl:w-20 m-1 lg:m-3 2xl:m-6 transition duration-150 transform hover:scale-150 hover:rotate-12`}
  }
`;

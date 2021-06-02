import { Parallax } from "react-scroll-parallax";
import { Section, Title } from "../styles/App";
import ReactTypingEffect from "react-typing-effect";
import styled from "styled-components";
import tw from "twin.macro";

import { parallaxText } from "assets/text";

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
} from "./index";

const Skills = () => {
  return (
    <Section className="bg-skills">
      <Title>
        <Parallax y={[-61, 56]} x={[1, -23]} className="z-40">
          <h1 className="text-pink-700">if</h1>
        </Parallax>
        <Parallax y={[43, -57]} x={[4, -25]} className="z-40">
          <h1 className="text-blue-500 text-6xl md:text-9xl">(skills)</h1>
        </Parallax>
        <Parallax y={[80, -37]} x={[-13, 10]} className="z-40">
          <h1 className="text-yellow-500">{"{hire}"}</h1>
        </Parallax>
      </Title>
      <div className="relative">
        <img
          src={computer}
          alt="computer"
          className="w-96 md:w-auto hidden md:block"
        />
        <img
          src={nokia}
          alt="nokia"
          className="w-full md:w-auto block md:hidden"
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
          <div className="w-full mt-2 md:mt-20 2xl:mt-40 md:text-green-500 text-sm md:text-xl 2xl:text-2xl">
            <ReactTypingEffect
              className="typingeffect hidden md:block"
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
              className="typingeffect block md:hidden font-black"
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

      {/* <div>
        <div className="m-2 flex justify-center">
          <h1 className="text-2xl">Tecnologies</h1>
        </div>
        <div className="flex m-4">
          <ul>
            <h2 className="heading-terciary u-margin-bottom-small">
              Proficient
            </h2>
            {skills.proficient.map((value) => {
              return <li>{value}</li>;
            })}
          </ul>
          <ul>
            <h2 className="heading-terciary u-margin-bottom-small">
              Knowledgeable
            </h2>
            {skills.knowledgeable.map((value) => {
              return <li>{value}</li>;
            })}
          </ul>
        </div>
      </div> */}
    </Section>
  );
};

export default Skills;

const Skill = styled.div.attrs({
  className:
    "absolute w-1/3 md:w-1/4 flex flex-row flex-wrap top-52 md:top-44 left-1/3 md:left-1/3 2xl:top-80 transform skew-0 md:-skew-y-6",
})`
  img {
    ${tw`h-5 md:h-auto md:w-10 2xl:w-20 m-1 md:m-3 2xl:m-6 transition duration-150 transform hover:scale-150 hover:rotate-12`}
  }
`;

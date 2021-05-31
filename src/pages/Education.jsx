import { Parallax } from "react-scroll-parallax";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";

import EducationCard from "components/EducationCard";
import { Section, Title } from "../styles/App";

import {
  title_education,
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
    <Section className="bg-education-mobile md:bg-education">
      <Title>
        <Parallax
          y={[-40, 40]}
          x={[-20, 0]}
          className="h-20 md:w-1/3 md:h-auto my-20 md:my10-10 2xl:mt-20 z-40"
        >
          <img src={title_education} alt="title" />
        </Parallax>
      </Title>
      <EducationContainer>
        <div className="slide-container w-4/5 rounded-md">
          <Slide easing="ease" className="contents md:hidden">
            <EducationCard
              img={pic01}
              title="Administration"
              from="Sep 05"
              to="Sep 08"
              where="IEFP Portugal"
              text="Administration in a professional school of Ponte de Sor where studied accounting, mathematics, business, etc. and worked for a year as a intern secretary/accountant."
            />
            <EducationCard
              img={pic02}
              title="The Complete Web Developer in 2019 - Zero to Mastery"
              from="Apr 19"
              to="Sep 19"
              where="Udemy"
              text="Online course that gave me knowledge in HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js React.js with Redux, PostgressSQL, SQL."
            />
            <EducationCard
              img={pic03}
              title="CS50 - Introdution to Computer Science"
              from="Dez 19"
              to="Mar 20"
              where="EDX"
              text="Excelente course which goes deep in the basic concepts of computer science such as algorithms and data structures. And also teaches C, Python and SQL."
            />
            <EducationCard
              img={pic04}
              title="Modern React with redux"
              from="Dez 20"
              to="Mar 21"
              where="Udemy"
              text="A very intense course with advanced concepts of REACT.js wit redux."
            />
            <EducationCard
              img={pic05}
              title="Advanced CSS and Sass"
              from="Jan 21"
              to="Mar 21"
              where="Udemy"
              text="This course teaches tons of modern CSS techniques, advanced CSS animations, Flexbox layouts, CSS Grid layouts and more."
            />
          </Slide>
          <Slide easing="ease" className="hidden md:contents">
            <EducationCard
              img={pic01_wide}
              title="Administration"
              from="Sep 05"
              to="Sep 08"
              where="IEFP Portugal"
              text="Administration in a professional school of Ponte de Sor where studied accounting, mathematics, business, etc. and worked for a year as a intern secretary/accountant."
            />
            <EducationCard
              img={pic02_wide}
              title="The Complete Web Developer in 2019 - Zero to Mastery"
              from="Apr 19"
              to="Sep 19"
              where="Udemy"
              text="Online course that gave me knowledge in HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js React.js with Redux, PostgressSQL, SQL."
            />
            <EducationCard
              img={pic03_wide}
              title="CS50 - Introdution to Computer Science"
              from="Dez 19"
              to="Mar 20"
              where="EDX"
              text="Excelente course which goes deep in the basic concepts of computer science such as algorithms and data structures. And also teaches C, Python and SQL."
            />
            <EducationCard
              img={pic04_wide}
              title="Modern React with redux"
              from="Dez 20"
              to="Mar 21"
              where="Udemy"
              text="A very intense course with advanced concepts of REACT.js wit redux."
            />
            <EducationCard
              img={pic05_wide}
              title="Advanced CSS and Sass"
              from="Jan 21"
              to="Mar 21"
              where="Udemy"
              text="This course teaches tons of modern CSS techniques, advanced CSS animations, Flexbox layouts, CSS Grid layouts and more."
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

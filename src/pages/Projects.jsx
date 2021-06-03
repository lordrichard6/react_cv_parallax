import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
// import tw from "twin.macro";

import Card from "components/Card";
import { Section, Title } from "styles/App";
import { projectsInfo } from "assets/text";

import {
  // title_projects,
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
} from "assets/imports";

const Projects = () => {
  return (
    <Section className="bg-projects">
      <Title className="lg:mt-52">
        <Parallax y={[40, -60]} x={[-20, 0]}>
          <h1 className="text-yellow-700">const</h1>
        </Parallax>
        <Parallax y={[-60, 40]} x={[-16, 10]}>
          <h1 className="text-blue-500 text-6xl">projects</h1>
        </Parallax>
      </Title>

      <CardContainer>
        <Div1>
          <Div2>
            <Div3>
              <Card
                img={img01}
                title={projectsInfo[0].title}
                link={projectsInfo[0].link}
                text={projectsInfo[0].text}
                git={projectsInfo[0].git}
                size="w-1/2 lg:w-3/4"
              />
              <Card
                img={img02}
                title={projectsInfo[1].title}
                link={projectsInfo[1].link}
                text={projectsInfo[1].text}
                git={projectsInfo[1].git}
                size="w-1/2 lg:w-1/4"
              />
            </Div3>
            <Div3>
              <Card
                img={img03}
                title={projectsInfo[2].title}
                link={projectsInfo[2].link}
                text={projectsInfo[2].text}
                git={projectsInfo[2].git}
                size="w-1/2 lg:w-1/4"
              />
              <Card
                img={img04}
                title={projectsInfo[3].title}
                link={projectsInfo[3].link}
                text={projectsInfo[3].text}
                git={projectsInfo[3].git}
                size="w-1/2 lg:w-3/4"
              />
            </Div3>
          </Div2>
          <Card
            img={img05}
            title={projectsInfo[4].title}
            link={projectsInfo[4].link}
            text={projectsInfo[4].text}
            git={projectsInfo[4].git}
            size="w-1/2 lg:w-1/4"
          />
        </Div1>
        <Div1>
          <Card
            img={img06}
            title={projectsInfo[5].title}
            link={projectsInfo[5].link}
            text={projectsInfo[5].text}
            git={projectsInfo[5].git}
            size="w-1/2 lg:w-1/4"
          />

          <Div2>
            <Div3>
              <Card
                img={img07}
                title={projectsInfo[6].title}
                link={projectsInfo[6].link}
                text={projectsInfo[6].text}
                git={projectsInfo[6].git}
                size="w-1/2 lg:w-1/4"
              />
              <Card
                img={img08}
                title={projectsInfo[7].title}
                link={projectsInfo[7].link}
                text={projectsInfo[7].text}
                git={projectsInfo[7].git}
                size="w-1/2 lg:w-3/4"
              />
            </Div3>
            <Div3>
              <Card
                img={img09}
                title={projectsInfo[8].title}
                link={projectsInfo[8].link}
                text={projectsInfo[8].text}
                git={projectsInfo[8].git}
                size="w-1/2 lg:w-3/4"
              />
              <Card
                img={img10}
                title={projectsInfo[9].title}
                link={projectsInfo[9].link}
                text={projectsInfo[9].text}
                git={projectsInfo[9].git}
                size="w-1/2 lg:w-1/4"
              />
            </Div3>
          </Div2>
        </Div1>
      </CardContainer>
    </Section>
  );
};

export default Projects;

// STYLE ----------------------------------------------------------------------------------------

const CardContainer = styled.div.attrs({
  className:
    "w-full 2xl:px-28 mt-10 flex flex-col flex-wrap justify-center content-center",
})``;

const Div1 = styled.div.attrs({
  className: "div1 w-full flex flex-row justify-center content-center",
})``;

const Div2 = styled.div.attrs({
  className: "div2 w-3/4 h-96 flex flex-col",
})``;

const Div3 = styled.div.attrs({
  className: "div3 w-full h-1/2 flex flex-row",
})``;

import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import tw from "twin.macro";

import ProjectCard from "components/ProjectCard";
import { projectsInfo } from "assets/main";

import BgImg from '../img/backgrounds/bg_projects-min.jpg'
import img01 from "img/components/projects_07-min.jpg";
import img02 from "img/components/projects_01-min.jpg";
import img03 from "img/components/projects_02-min.jpg";
import img04 from "img/components/projects_08-min.jpg";
import img05 from "img/components/projects_03-min.jpg";
import img06 from "img/components/projects_04-min.jpg";
import img07 from "img/components/projects_05-min.jpg";
import img08 from "img/components/projects_09-min.jpg";
import img09 from "img/components/projects_10-min.jpg";
import img10 from "img/components/projects_06-min.jpg";
import img11 from "img/components/projects_11-min.jpg";
import img12 from "img/components/projects_12-min.jpg";
import p12 from "img/components/p11-min.jpg";


const Projects = () => {
  return (
    <Section>
      <TitleContainer>
        <Parallax y={[40, -60]} x={[-20, 0]}>
          <FirstTitle>const</FirstTitle>
        </Parallax>
        <Parallax y={[-60, 40]} x={[-16, 10]}>
          <SecondTitle>projects</SecondTitle>
        </Parallax>
      </TitleContainer>

      <CardContainer>

        <LatestContainer>
          <LatestProjectCard
            img={img11}
            ModalImg={p12}
            title={projectsInfo[10].title}
            link={projectsInfo[10].link}
            text={projectsInfo[10].text}
            git={projectsInfo[10].git}
            size="w-2/5 lg:w-1/4"
            modal='right center'
          />
          
          <LatestProjectCard
            img={img12}
            title={projectsInfo[11].title}
            link={projectsInfo[11].link}
            text={projectsInfo[11].text}
            git={projectsInfo[11].git}
            size="w-2/5 lg:w-1/4"
            modal='left center'
          />
        </LatestContainer>

        <Div1>
          <Div2>
            <Div3>
              <ProjectCard
                img={img01}
                title={projectsInfo[0].title}
                link={projectsInfo[0].link}
                text={projectsInfo[0].text}
                git={projectsInfo[0].git}
                size="w-1/2 lg:w-3/4"
                modal='right center'
              />
              <ProjectCard
                img={img02}
                title={projectsInfo[1].title}
                link={projectsInfo[1].link}
                text={projectsInfo[1].text}
                git={projectsInfo[1].git}
                size="w-1/2 lg:w-1/4"
                modal='bottom center'
              />
            </Div3>
            <Div3>
              <ProjectCard
                img={img03}
                title={projectsInfo[2].title}
                link={projectsInfo[2].link}
                text={projectsInfo[2].text}
                git={projectsInfo[2].git}
                size="w-1/2 lg:w-1/4"
                modal='right center'
              />
              <ProjectCard
                img={img04}
                title={projectsInfo[3].title}
                link={projectsInfo[3].link}
                text={projectsInfo[3].text}
                git={projectsInfo[3].git}
                size="w-1/2 lg:w-3/4"
                modal='top center'
              />
            </Div3>
          </Div2>
          <ProjectCard
            img={img05}
            title={projectsInfo[4].title}
            link={projectsInfo[4].link}
            text={projectsInfo[4].text}
            git={projectsInfo[4].git}
            size="w-1/2 lg:w-1/4"
            modal='left center'
          />
        </Div1>
        <Div1>
          <ProjectCard
            img={img06}
            title={projectsInfo[5].title}
            link={projectsInfo[5].link}
            text={projectsInfo[5].text}
            git={projectsInfo[5].git}
            size="w-1/2 lg:w-1/4"
            modal='right center'
          />

          <Div2>
            <Div3>
              <ProjectCard
                img={img07}
                title={projectsInfo[6].title}
                link={projectsInfo[6].link}
                text={projectsInfo[6].text}
                git={projectsInfo[6].git}
                size="w-1/2 lg:w-1/4"
                modal='top center'
              />
              <ProjectCard
                img={img08}
                title={projectsInfo[7].title}
                link={projectsInfo[7].link}
                text={projectsInfo[7].text}
                git={projectsInfo[7].git}
                size="w-1/2 lg:w-3/4"
                modal='left center'
              />
            </Div3>
            <Div3>
              <ProjectCard
                img={img09}
                title={projectsInfo[8].title}
                link={projectsInfo[8].link}
                text={projectsInfo[8].text}
                git={projectsInfo[8].git}
                size="w-1/2 lg:w-3/4"
                modal='top center'
              />
              <ProjectCard
                img={img10}
                title={projectsInfo[9].title}
                link={projectsInfo[9].link}
                text={projectsInfo[9].text}
                git={projectsInfo[9].git}
                size="w-1/2 lg:w-1/4"
                modal='left center'
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
const Section = styled.section`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)),  url(${BgImg});
  ${tw`
    p-2 
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
    lg:mt-52
  `}
`;

const FirstTitle = styled.h1`
  ${tw`
    text-yellow-700
  `}
`;

const SecondTitle = styled.h1`
  ${tw`
    text-blue-500 
    text-5xl
  `}
`;

const CardContainer = styled.div`
  ${tw`
    w-full  
    mt-10 
    flex 
    flex-col 
    flex-wrap 
    justify-center 
    content-center
    2xl:px-28
  `}
`;

const LatestContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    space-x-2
    justify-center
    mb-2
    h-80
    min-h-full
    w-full
  `}
`;

const LatestProjectCard = styled(ProjectCard)`
  ${tw`
    w-full
  `}
`;

const Div1 = styled.div`
  ${tw`
    w-full 
    flex 
    flex-row 
    justify-center 
    content-center
  `}
`;

const Div2 = styled.div`
  ${tw`
    w-3/4 
    h-96 
    flex 
    flex-col
  `}
`;

const Div3 = styled.div`
  ${tw`
    w-full 
    h-1/2 
    flex 
    flex-row
  `}
`;

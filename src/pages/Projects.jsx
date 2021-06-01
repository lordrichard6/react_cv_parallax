import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
// import tw from "twin.macro";

import Card from "components/Card";
import { Section, Title } from "../styles/App";

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
} from "./index";

const Projects = () => {
  return (
    <Section className="bg-projects">
      <Title>
        <Parallax
          y={[40, -60]}
          x={[-20, 0]}
        >
          {/* <img src={title_projects} alt="title" /> */}
          <h1 className='text-yellow-700'>const</h1>
        </Parallax>
        <Parallax
          y={[-60, 40]}
          x={[-16, 10]}
        >
          {/* <img src={title_projects} alt="title" /> */}
          <h1 className='text-blue-500 text-6xl'>projects</h1>
        </Parallax>
      </Title>

      <CardContainer>
        <Div1>
          <Div2>
            <Div3>
              <Card
                img={img01}
                title="Previous portfolio"
                link="https://reizinhocv.netlify.app/"
                text="React"
                background="../img/logo_me.png"
                git="https://github.com/lordrichard6/reactCV"
                size="w-1/2 md:w-3/4"
              />
              <Card
                img={img02}
                title="Hulu clone"
                link="https://hulu-clone-rosy.vercel.app/"
                text="React"
                background="../img/logo_me.png"
                git="https://github.com/lordrichard6/hulu_clone"
                size="w-1/2 md:w-1/4"
              />
            </Div3>
            <Div3>
              <Card
                img={img03}
                title="Paul's Engine"
                link="https://paul-search.vercel.app/"
                text="React"
                background="../img/logo_me.png"
                git="https://github.com/lordrichard6/paul-search"
                size="w-1/2 md:w-1/4"
              />
              <Card
                img={img04}
                title="Skytours"
                link="https://reizinho-skytours.netlify.com/"
                text="React"
                background="../img/logo_me.png"
                git="https://github.com/lordrichard6/skytours"
                size="w-1/2 md:w-3/4"
              />
            </Div3>
          </Div2>
          <Card
            img={img05}
            title="Monkey Circus"
            link="https://monkeycircus-2z4e865i4.now.sh"
            text="Next.js"
            git="https://github.com/lordrichard6/monkeycircus"
            size="w-1/2 md:w-1/4"
          />
        </Div1>
        <Div1>
          <Card
            img={img06}
            title="Face Detection App"
            link="https://pauloreizinho-facerecognition.netlify.com/"
            text="React, Image recognition API"
            git="https://github.com/lordrichard6/faceRecognition"
            size="w-1/2 md:w-1/4"
          />

          <Div2>
            <Div3>
              <Card
                img={img07}
                title="RoboFriends"
                link="https://lordrichard6.github.io/robofriends/"
                text="React"
                git="https://github.com/lordrichard6/robofriends"
                size="w-1/2 md:w-1/4"
              />
              <Card
                img={img08}
                title="To Do"
                link="https://lordrichard-svelte-todo.netlify.com/"
                text="Svelte 3"
                git="https://github.com/lordrichard6/svelte_todo"
                size="w-1/2 md:w-3/4"
              />
            </Div3>
            <Div3>
              <Card
                img={img09}
                title="Netflix Copy"
                link="https://pauloreizinho-netflix.netlify.com/"
                text="HTML5, CSS, JavaScript"
                git="https://github.com/lordrichard6/netflix_landingpage"
                size="w-1/2 md:w-3/4"
              />
              <Card
                img={img10}
                title="FlappyBird"
                link="https://pauloreizinho-flappybird.netlify.com/"
                text="Vanila JS, HTML, CSS, Game"
                git="https://github.com/lordrichard6/flappyProj"
                size="w-1/2 md:w-1/4"
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
    "w-full md:w-11/12 mt-10 flex flex-col flex-wrap justify-center content-center",
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

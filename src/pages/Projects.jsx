import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
// import tw from "twin.macro";

import Card from "components/Card";
import { Section, Title } from "../styles/App";

import title from "img/projects-min.png";
import img01 from "img/projects_07-min.jpg";
import img02 from "img/projects_01-min.jpg";
import img03 from "img/projects_02-min.jpg";
import img04 from "img/projects_08-min.jpg";
import img05 from "img/projects_03-min.jpg";
import img06 from "img/projects_04-min.jpg";
import img07 from "img/projects_05-min.jpg";
import img08 from "img/projects_09-min.jpg";
import img09 from "img/projects_10-min.jpg";
import img10 from "img/projects_06-min.jpg";

const Projects = () => {
  return (
    <Section className="flex justify-center flex-wrap content-center bg-projects-mobile md:bg-projects">
      <Title>
        <Parallax
          y={[-60, 60]}
          x={[-20, 20]}
          className="h-20 md:w-1/3 md:h-auto my-20 2xl:m-10"
        >
          <img src={title} alt="title" />
        </Parallax>
      </Title>

      <CardContainer>
        <div className="div1 w-full flex flex-row justify-center content-center">
          <div className="div2 w-3/4 h-96 flex flex-col">
            <div className="div3 w-full h-1/2 flex flex-row">
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
            </div>
            <div className="div3 w-full h-1/2 flex flex-row">
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
            </div>
          </div>
          <Card
            img={img05}
            title="Monkey Circus"
            link="https://monkeycircus-2z4e865i4.now.sh"
            text="Next.js"
            git="https://github.com/lordrichard6/monkeycircus"
            size="w-1/2 md:w-1/4"
          />
        </div>
        <div className="div1 w-full flex flex-row justify-center content-center">
          <Card
            img={img06}
            title="Face Detection App"
            link="https://pauloreizinho-facerecognition.netlify.com/"
            text="React, Image recognition API"
            git="https://github.com/lordrichard6/faceRecognition"
            size="w-1/2 md:w-1/4"
          />

          <div className="div2 w-3/4 h-96 flex flex-col">
            <div className="div3 w-full h-1/2 flex flex-row">
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
                size='w-1/2 md:w-3/4'
              />
            </div>
            <div className="div3 w-full h-1/2 flex flex-row">
              <Card
                img={img09}
                title="Netflix Copy"
                link="https://pauloreizinho-netflix.netlify.com/"
                text="HTML5, CSS, JavaScript"
                git="https://github.com/lordrichard6/netflix_landingpage"
                size='w-1/2 md:w-3/4'
              />
              <Card
                img={img10}
                title="FlappyBird"
                link="https://pauloreizinho-flappybird.netlify.com/"
                text="Vanila JS, HTML, CSS, Game"
                git="https://github.com/lordrichard6/flappyProj"
                size="w-1/2 md:w-1/4"
              />
            </div>
          </div>
        </div>
      </CardContainer>
    </Section>
  );
};

export default Projects;

// STYLE ----------------------------------------------------------------------------------------

const CardContainer = styled.div.attrs({
  className: "w-screen md:w-11/12 flex flex-col flex-wrap justify-center content-center",
})``;

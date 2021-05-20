import { Parallax } from "react-scroll-parallax";
import Card from "../components/Card";

import title from "../img/projects-min.png";
import img01 from "../img/img-01.png";
import img02 from "../img/img-02.png";
import img03 from "../img/img-03.jpg";
import img04 from "../img/img-04.png";
import img07 from "../img/img-07.png";
import img08 from "../img/img-08.png";
import img09 from "../img/img-09.jpg";
import img10 from "../img/img-10.png";
import img11 from "../img/img-11.png";
import img12 from "../img/img-12.png";

const Projects = () => {

  return (
    <section className="min-h-screen bg-projects bg-center">
      <div>
        <div className=" flex justify-center">
          <Parallax
            y={[-60, 60]}
            x={[-20, 20]}
            className="h-20 md:w-1/3 md:h-auto m-20 2xl:m-40"
          >
            <img src={title} alt="title" />
          </Parallax>
        </div>

        <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center content-center 2xl:px-40 pb-20 2xl:pb-40">
          <Card
            img={img12}
            title="Previous portfolio"
            link="https://reizinhocv.netlify.app/"
            text="React"
            background="../img/logo_me.png"
            git="https://github.com/lordrichard6/reactCV"
          />
          <Card
            img={img11}
            title="Hulu clone"
            link="https://hulu-clone-rosy.vercel.app/"
            text="React"
            background="../img/logo_me.png"
            git="https://github.com/lordrichard6/hulu_clone"
          />
          <Card
            img={img10}
            title="Paul's Engine"
            link="https://paul-search.vercel.app/"
            text="React"
            background="../img/logo_me.png"
            git="https://github.com/lordrichard6/paul-search"
          />
          <Card
            img={img09}
            title="Skytours"
            link="https://reizinho-skytours.netlify.com/"
            text="React"
            background="../img/logo_me.png"
            git="https://github.com/lordrichard6/skytours"
          />
          <Card
            img={img08}
            title="Monkey Circus"
            link="https://monkeycircus-2z4e865i4.now.sh"
            text="Next.js"
            git="https://github.com/lordrichard6/monkeycircus"
          />
          <Card
            img={img01}
            title="Face Detection App"
            link="https://pauloreizinho-facerecognition.netlify.com/"
            text="React, Image recognition API"
            git="https://github.com/lordrichard6/faceRecognition"
          />
          <Card
            img={img02}
            title="RoboFriends"
            link="https://lordrichard6.github.io/robofriends/"
            text="React"
            git="https://github.com/lordrichard6/robofriends"
          />
          <Card
            img={img07}
            title="To Do"
            link="https://lordrichard-svelte-todo.netlify.com/"
            text="Svelte 3"
            git="https://github.com/lordrichard6/svelte_todo"
          />
          <Card
            img={img03}
            title="Netflix Copy"
            link="https://pauloreizinho-netflix.netlify.com/"
            text="HTML5, CSS, JavaScript"
            git="https://github.com/lordrichard6/netflix_landingpage"
          />
          <Card
            img={img04}
            title="FlappyBird"
            link="https://pauloreizinho-flappybird.netlify.com/"
            text="Vanila JS, HTML, CSS, Game"
            git="https://github.com/lordrichard6/flappyProj"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

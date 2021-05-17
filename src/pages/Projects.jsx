import Card from "../components/Card";

import title from "../img/projects-min.png";
import img3 from "../img/img-3.jpg";
import img4 from "../img/img-4.png";
import img7 from "../img/img-7.png";
import img2 from "../img/img-2.png";
import img1 from "../img/img-1.png";
import img8 from "../img/img-8.png";
import img9 from "../img/img-9.jpg";

const Projects = () => {
  return (
    <section className="w-screen">
      <div>
        <div className="m-2 flex justify-center">
          {/* <h1 className="text-2xl">My Projects</h1> */}
          <img
            src={title}
            alt="title"
            className="h-20 md:w-1/3 md:h-auto"
          />
        </div>

        <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center content-center">
          <Card
            img={img9}
            title="Skytours"
            link="https://reizinho-skytours.netlify.com/"
            text="React"
            background="../img/logo_me.png"
            git="https://github.com/lordrichard6/skytours"
          />
          <Card
            img={img8}
            title="Monkey Circus"
            link="https://monkeycircus-2z4e865i4.now.sh"
            text="Next.js"
            git="https://github.com/lordrichard6/monkeycircus"
          />
          <Card
            img={img1}
            title="Face Detection App"
            link="https://pauloreizinho-facerecognition.netlify.com/"
            text="React, Image recognition API"
            git="https://github.com/lordrichard6/faceRecognition"
          />
          <Card
            img={img2}
            title="RoboFriends"
            link="https://lordrichard6.github.io/robofriends/"
            text="React"
            git="https://github.com/lordrichard6/robofriends"
          />
          <Card
            img={img7}
            title="To Do"
            link="https://lordrichard-svelte-todo.netlify.com/"
            text="Svelte 3"
            git="https://github.com/lordrichard6/svelte_todo"
          />
          <Card
            img={img3}
            title="Netflix Copy"
            link="https://pauloreizinho-netflix.netlify.com/"
            text="HTML5, CSS, JavaScript"
            git="https://github.com/lordrichard6/netflix_landingpage"
          />
          <Card
            img={img4}
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

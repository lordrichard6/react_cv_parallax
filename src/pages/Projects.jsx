import Card from "../components/Card";

const Projects = () => {
  return (
    <div className="w-screen">
      <div>
        <div className="m-2 flex justify-center">
          <h1 className="text-2xl">My Projects</h1>
        </div>

        <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center content-center">
          <Card
            //   back={img9}
            title="Skytours"
            link="https://reizinho-skytours.netlify.com/"
            text="React"
            background='../img/logo_me.png'
            //   git="https://github.com/lordrichard6/skytours"
          />
          <Card
            //   back={img8}
            title="Monkey Circus"
            link="https://monkeycircus-2z4e865i4.now.sh"
            text="Next.js"
            //   git="https://github.com/lordrichard6/monkeycircus"
          />
          <Card
            //   back={img1}
            title="Face Detection App"
            link="https://pauloreizinho-facerecognition.netlify.com/"
            text="React, Image recognition API"
            //   git="https://github.com/lordrichard6/faceRecognition"
          />
          <Card
            //   back={img2}
            title="RoboFriends"
            link="https://lordrichard6.github.io/robofriends/"
            text="React"
            //   git="https://github.com/lordrichard6/robofriends"
          />
          <Card
            //   back={img7}
            title="To Do"
            link="https://lordrichard-svelte-todo.netlify.com/"
            text="Svelte 3"
            //   git="https://github.com/lordrichard6/svelte_todo"
          />
          <Card
            //   back={img3}
            title="Netflix Copy"
            link="https://pauloreizinho-netflix.netlify.com/"
            text="HTML5, CSS, JavaScript"
            //   git="https://github.com/lordrichard6/netflix_landingpage"
          />
          <Card
            //   back={img4}
            title="FlappyBird"
            link="https://pauloreizinho-flappybird.netlify.com/"
            text="Vanila JS, HTML, CSS, Game"
            //   git="https://github.com/lordrichard6/flappyProj"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

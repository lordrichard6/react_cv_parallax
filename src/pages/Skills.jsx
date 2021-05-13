const skills = {
  proficient: [
    "HTML5/BOOTSTRAP",
    "CSS/SASS",
    "JAVASCRIPT",
    "REACT.JS",
    "PYTHON",
    "GIT",
    "NODE.JS",
    "EXPRESS.JS",
  ],
  knowledgeable: [
    "DJANGO",
    "ANGULAR",
    "VUE",
    "TYPESCRIPT",
    "WEBPACK/PARCEL",
    "DOCKER",
    "PHOTOSHOP",
  ],
};

const Skills = () => {
  return (
    <section className="container mx-auto px-6 flex flex-wrap justify-center content-center">
      <div>
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
      </div>
    </section>
  );
};

export default Skills;

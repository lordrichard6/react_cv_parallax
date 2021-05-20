import EdSnippet from "../components/EdSnippet";
import { Parallax } from "react-scroll-parallax";

import title from "../img/education-min.png";
import edu1 from "../img/edu-1.jpg";
import edu2 from "../img/edu-2.jpg";
import edu3 from "../img/edu-3.jpg";
import edu4 from "../img/edu-4.jpg";
import edu5 from "../img/edu-5.jpg";

const Education = () => {
  return (
    <section className="pt-6 min-h-screen bg-education bg-center bg-cover bg-no-repeat">
      <div>
        <div className="m-6 flex justify-center">
          <Parallax
            y={[-40, 40]}
            x={[20, -20]}
            className="h-20 md:w-1/3 md:h-auto mb-10 md:mt-10 2xl:mt-20 z-40"
          >
            <img src={title} alt="title" />
          </Parallax>
        </div>
        <div className="flex flex-col flex-wrap justify-center content-center pb-10 2xl:pb-20">
          <EdSnippet
            img={edu1}
            align={"flex-start"}
            title="Administration"
            from="Sep 05"
            to="Sep 08"
            where="IEFP Portugal"
            text="Administration in a professional school of Ponte de Sor where studied accounting, mathematics, business, etc. and worked for a year as a intern secretary/accountant."
          />
          <EdSnippet
            img={edu2}
            align={"flex-end"}
            title="The Complete Web Developer in 2019 - Zero to Mastery"
            from="Apr 19"
            to="Sep 19"
            where="Udemy"
            text="Online course that gave me knowledge in HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js React.js with Redux, PostgressSQL, SQL."
          />
          <EdSnippet
            img={edu3}
            align={"flex-start"}
            title="CS50 - Introdution to Computer Science"
            from="Dez 19"
            to="Mar 20"
            where="EDX"
            text="Excelente course which goes deep in the basic concepts of computer science such as algorithms and data structures. And also teaches C, Python and SQL."
          />
          <EdSnippet
            img={edu5}
            align={"flex-end"}
            title="Modern React with redux"
            from="Dez 20"
            to="Mar 21"
            where="Udemy"
            text="A very intense course with advanced concepts of REACT.js wit redux."
          />
          <EdSnippet
            img={edu4}
            align={"flex-start"}
            title="Advanced CSS and Sass"
            from="Jan 21"
            to="Mar 21"
            where="Udemy"
            text="This course teaches tons of modern CSS techniques, advanced CSS animations, Flexbox layouts, CSS Grid layouts and more."
          />
        </div>
      </div>
    </section>
  );
};

export default Education;

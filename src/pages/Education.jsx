import EdSnippet from "../components/EdSnippet";

import title from "../img/education-min.png";
import edu1 from "../img/edu-1.jpg";
import edu2 from "../img/edu-2.jpg";
import edu3 from "../img/edu-3.jpg";
import edu4 from "../img/edu-4.jpg";
import edu5 from "../img/edu-5.jpg";

const Education = () => {
  return (
    <section className="pt-6">
      <div>
        <div className="m-6 flex justify-center">
          <img
            src={title}
            alt="title"
            className="h-20 md:w-1/3 md:h-auto z-40"
          />
        </div>
        <div className="flex flex-wrap justify-center content-center">
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
          {/* <Card
            img={edu1}
            title="Administration"
            where="IEFP Portugal"
            from="Sep 05"
            to="Sep 08"
            
          />

          <Card
            img={edu2}
            title="The Complete Web Developer in 2019 - Zero to Mastery"
            link="https://www.udemy.com/share/101WcUB0UScVdSTHQ=/"
            where="Udemy"
            from="Apr 19"
            to="Sep 19"
            
          />

          <Card
            img={edu3}
            title="CS50 - Introdution to Computer Science"
            link="https://courses.edx.org/courses/course-v1:HarvardX+CS50+X/course/"
            where="EDX"
            from="Dez 19"
            to="Mar 20"
            
          />

          <Card
            img={edu5}
            title="Modern React with redux"
            link="https://www.udemy.com/certificate/UC-73ba9fa4-dd6f-4e58-942a-28cfa0c6a1ab/"
            where="Udemy"
            from="Dez 20"
            to="Mar 21"
            text="A very intense course with advanced concepts of REACT.js wit redux."
          />

          <Card
            img={edu4}
            title="Advanced CSS and Sass"
            link="https://www.udemy.com/share/101WkwB0UScVdSTHQ=/"
            where="Udemy"
            from="Jan 21"
            to="Mar 21"
            text="This course teaches tons of modern CSS techniques, advanced CSS animations, Flexbox layouts, CSS Grid layouts and more."
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Education;

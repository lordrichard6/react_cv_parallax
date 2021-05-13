import Card from "../components/Card";

const Education = () => {
  return (
    <section className="p-6">
      <div>
        <div className="m-2 flex justify-center">
          <h1 className="text-2xl">My Education</h1>
        </div>
        <div className="flex flex-wrap justify-center content-center">
          <Card
            //   img={edu1}
            title="Administration"
            where="IEFP Portugal"
            from="Sep 05"
            to="Sep 08"
            text="Administration in a professional school of Ponte de Sor where studied accounting, mathematics, business, etc. and worked for a year as a intern secretary/accountant."
          />

          <Card
            //   img={edu2}
            title="The Complete Web Developer in 2019 - Zero to Mastery"
            link="https://www.udemy.com/share/101WcUB0UScVdSTHQ=/"
            where="Udemy"
            from="Apr 19"
            to="Sep 19"
            text="Online course that gave me knowledge in HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js React.js with Redux, PostgressSQL, SQL."
          />

          <Card
            //   img={edu3}
            title="CS50 - Introdution to Computer Science"
            link="https://courses.edx.org/courses/course-v1:HarvardX+CS50+X/course/"
            where="EDX"
            from="Dez 19"
            to="Mar 20"
            text="Excelente course which goes deep in the basic concepts of computer science such as algorithms and data structures. And also teaches C, Python and SQL."
          />

          <Card
            //   img={edu5}
            title="Modern React with redux"
            link="https://www.udemy.com/certificate/UC-73ba9fa4-dd6f-4e58-942a-28cfa0c6a1ab/"
            where="Udemy"
            from="Dez 20"
            to="Mar 21"
            text="A very intense course with advanced concepts of REACT.js wit redux."
          />

          <Card
            //   img={edu4}
            title="Advanced CSS and Sass"
            link="https://www.udemy.com/share/101WkwB0UScVdSTHQ=/"
            where="Udemy"
            from="Jan 21"
            to="Mar 21"
            text="This course teaches tons of modern CSS techniques, advanced CSS animations, Flexbox layouts, CSS Grid layouts and more."
          />
        </div>
      </div>
    </section>
  );
};

export default Education;

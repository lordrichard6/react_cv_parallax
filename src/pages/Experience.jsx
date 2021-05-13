import Card from "../components/Card";

const Experience = () => {
  return (
    <section className="p-6">
      <div>
        <div className="m-2 flex justify-center">
          <h1 className="text-2xl">Experience</h1>
        </div>
        <div className="flex flex-wrap justify-center content-center">
          <Card
            // img={work1}
            title="Front Dev Intern"
            link="https://feinheit.ch/"
            where="Feinheit"
            from="Aug 19"
            to="Jan 20"
            text="My first professional experience as a Front End Web Developer,  where i worked mainly with HTML and SASS but learn Python with Django which was our main tool."
          />
        </div>
      </div>

      {/* <div className="row justify-content-center">
        <div className="col col-sm-4">
          <h2 className="subtopic">Associated Projects</h2>
          <h4>
            <a
              href="https://bezahlbare-wohnungen.ch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              bezahlbare Wohnungen
            </a>
          </h4>
          <h4>
            <a
              href="http://www.protier.ch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              protier
            </a>
          </h4>
          <h4>
            <a
              href="https://litra.ch/de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              litra
            </a>
          </h4>
          <h4>
            <a
              href="https://feinheit.ch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feinheit
            </a>
          </h4>
          <button className='btn btn-secondary'><a href="https://drive.google.com/open?id=1dTdrq0Ptp1WTh_H5SF1CbshIhcXoZPYq" target='_blank' rel='noopener noreferrer'>Recomendation Letter</a></button>  
        </div>
      </div> */}
    </section>
  );
};

export default Experience;

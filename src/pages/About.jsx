const About = () => {
  return (
    <section className="h-screen p-6 mt-20">
      <div className="m-2 flex justify-center">
        <h1 className="text-2xl md:text-8xl">About me</h1>
      </div>
      <div className="row">
        <div className="col col-lg-12">
          <h2 className="italic tracking-widest text-2xl md:text-3xl mt-10 mb-5">
            Hey there compadres y comadres
          </h2>
          <p className="leading-relaxed text-xl md:text-2xl">
            I took Administration with focus in accounting but thing is, I love
            coding and the challenges that come with it but i found it much later,
            but is never to late to create great things provided that you have what it takes.
            <br />
            Let's work on you problems and find solutions, sure there will be bugs on the process
            but we take care of them too.
            <br />
            My main tech is React and my main focus is Front End,
            but give me a challenge and let the magic happen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

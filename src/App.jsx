import Header from "./pages/Header";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import ContactForm from "./pages/ContactForm";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div classeName="App">
      <div className="row">
        <Header />
        <About />
        <Projects />
        <Education />
        <Experience />
        {/* <Skills /> */}
        <ContactForm />
      </div>
    </div>
  );
};

export default App;

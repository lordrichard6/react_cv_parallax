import { ParallaxProvider } from "react-scroll-parallax";

import Header from "pages/Header";
import About from "pages/About";
import Projects from "pages/Projects";
import Education from "pages/Education";
import Experience from "pages/Experience";
// import Skills from "./pages/Skills";
import Footer from "pages/Footer";


const App = () => {
  return (
    <ParallaxProvider>
      <div classeName="App">
        <Header />
        <About />
        <Projects />
        <Education />
        <Experience />
        {/* <Skills /> */}
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default App;

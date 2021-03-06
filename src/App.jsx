import { ParallaxProvider } from "react-scroll-parallax";
import LazyLoad from "react-lazyload";

import Header from "pages/Header";
import About from "pages/About";
import Projects from "pages/Projects";
import Education from "pages/Education";
import Experience from "pages/Experience";
import MySkills from "./pages/MySkills";
import Footer from "pages/Footer";

const App = () => {
  return (
    <ParallaxProvider>
      <div classeName="App">
        <Header />
        <LazyLoad>
          <About />
        </LazyLoad>
        <LazyLoad>
          <Projects />
        </LazyLoad>
        <LazyLoad>
          <Education />
        </LazyLoad>
        <LazyLoad>
          <Experience />
        </LazyLoad>
        <LazyLoad>
          <MySkills />
        </LazyLoad>
        <LazyLoad>
          <Footer />
        </LazyLoad>
      </div>
    </ParallaxProvider>
  );
};

export default App;

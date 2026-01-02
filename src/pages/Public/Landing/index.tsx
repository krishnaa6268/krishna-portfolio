import { type JSX } from "react";
//import SplashCursor from "../../../components/Common/SplashCursor";
import HeroSection from "../../../components/Landing/HeroSection";
import Contact from "../../../components/Landing/Contact";
import About from "../../../components/Landing/About";
import Projects from "../../../components/Landing/Projects";
import Experience from "../../../components/Landing/Experience";
import Skills from "../../../components/Landing/Skills";

export default function Landing(): JSX.Element {
  return (
    <div className=" mx-auto">
      {/* Global fluid cursor overlay */}
      {/* <SplashCursor /> */}

      {/* Page Components */}
      <HeroSection />
      <About />
      <Skills/>
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

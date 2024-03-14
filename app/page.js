import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project"
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection/>
      <Education/>
      <Experience/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}

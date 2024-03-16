import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Education />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

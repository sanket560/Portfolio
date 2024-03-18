import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import HeroSection from "@/components/HeroSection";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />
      <Header />
      <HeroSection />
      <Education />
      <Experience />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

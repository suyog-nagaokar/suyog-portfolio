import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import AskAI from "@/components/AskAI";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Skills />
        <AskAI />
      </main>
      <Footer />
    </>
  );
}

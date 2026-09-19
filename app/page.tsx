import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Signal from "@/components/Signal";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Signal />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

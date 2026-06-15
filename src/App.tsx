import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Extracurricular from "./components/Extracurricular";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      <div className="fixed inset-0 grid-bg pointer-events-none" aria-hidden="true" />
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(249, 115, 22, 0.08), transparent)",
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Extracurricular />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

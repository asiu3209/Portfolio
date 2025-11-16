import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Extracurricular from "./components/Extracurricular";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      <style>{`
        @keyframes gradient {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        
        .animate-gradient {
          animation: gradient 20s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Extracurricular />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

//https://dashboard.emailjs.com/admin/account

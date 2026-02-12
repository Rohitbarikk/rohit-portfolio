import Leftdock from "./components/leftdock";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CreativeLab from "./components/CreativeLab";


export default function App() {
  return (
    <div className="min-h-screen bg-bg bg-grid">
      <Navbar />
      <Leftdock />

      <main className="pt-24">
        <Hero />
<About />
<Projects />
<Experience />
<Skills />
<CreativeLab />
<Contact />
      </main>
      <Footer />
    </div>
  );
}

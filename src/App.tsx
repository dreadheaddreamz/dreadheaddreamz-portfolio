import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <main className="app">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
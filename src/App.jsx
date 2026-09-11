import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import "../style.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </>
  );
}

export default App;
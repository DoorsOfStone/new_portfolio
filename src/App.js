import "./App.css";
import About from "./components/About";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import videoBg from "./video/Forest.mp4";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
function App() {
  return (
    <div className="App">
      <video src={videoBg} type="video/mp4" autoPlay loop muted />
      <div className="content">
        <div className="Main_container ">
          <Menu />

          <div className="left_container ">
            <About />
            <Skills />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

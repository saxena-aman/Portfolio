import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import { Element } from "react-scroll";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Tech,
  StarsCanvas,
  Ticket,
} from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import InProgress from "./components/InProgress";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <div className="relative z-0">
          <div>
            <NavBar />
            <Banner />
          </div>
          <Element name="about">
            <About />
          </Element>
          <Element name="skills">
            <Tech />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
          {/* <Element name="inprogress">
          <InProgress />
        </Element> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

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
    <BrowserRouter>
      <div className="relative z-0">
        <div className="MainContent">
          <NavBar />
          <Banner />
        </div>
        <Element name="about">
          <About />
        </Element>
        <Element name="Tech">
          <Tech />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Element name="inprogress">
          <InProgress />
        </Element>
      </div>
    </BrowserRouter>
  );
}

export default App;

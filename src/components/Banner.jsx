import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import TrackVisibility from "react-on-screen";
import "animate.css";
import "../styles/banner.css";
export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Software Engineer",
    "Full-Stack Engineer",
    "React.JS Developer",
    "Vue.JS Developer",
    "Blockchain Developer",
    "Android Developer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Aman`}
                    <br />
                    <span
                      className="txt-rotate"
                      dataperiod="500"
                      data-rotate='["Software Engineer", "Full-Stack Engineer", "React.JS Developer","Vue.JS Developer","BlockChain Developer","Android Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Welcome to the cosmos of my creation, Where ideas take
                    flight, in vivid animation. I'm Aman, a developer, crafting
                    with elation, Using React.JS for seamless application. With
                    AWS Amplify, I elevate my station, Ensuring scalability
                    across every iteration. And with Three.js, I add a new
                    dimension, Bringing 3D effects to life with dedication. This
                    space is still under transformation, As I code my journey,
                    and my imagination. So stay awhile, explore my
                    constellation, Where tech and creativity meet in perfect
                    formation.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Link to="about" spy={true} smooth={true} duration={50}>
          <div className="capsule-div">
            <div className="capsule">
              <motion.div
                animate={{
                  y: [0, 36, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="point-ball"
              />
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}

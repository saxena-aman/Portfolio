import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "../styles/navbar.css";
export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      const { top, height } = contactSection.getBoundingClientRect();
      const offset = top + window.scrollY + 100;
      const screenHeight = window.innerHeight;
      const scrollToPosition = offset - (screenHeight / 2 - height / 2);

      window.scrollTo({
        top: 4000,
        behavior: "smooth",
      });
    }
  };
  const handleLinkClick = () => {
    // Open the S3 URL in a new tab when the link is clicked
    window.open(
      "https://personal-items1.s3.ap-south-1.amazonaws.com/Aman_Resume.pdf",
      "_blank"
    );
  };
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="ms-auto"> */}
          <Nav
            className="ms-auto"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("experience")}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link className="navbar-link" onClick={handleLinkClick}>
              Download CV
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div
              className="social-icon"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <a href="https://www.linkedin.com/in/dev-aman/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/saxena-aman">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/_.the__aman._/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <div>
              <button className="vvd" onClick={scrollToContact}>
                <span>Let’s Connect</span>
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import React from "react";
import { Tilt } from "react-tilt";
import { textVariant } from "../utils/motion";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import "../styles/tech.css";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import styles from "../styles/card.module.css";
import titleStyles from "../styles/exp.module.css";

const TicketCard = ({ name, tech, index }) => (
  <Tilt
    style={{
      maxWidth: 500,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <div className="ticket-visual_visual" id="ticket">
        <div className="left"></div>
        <div className="right"></div>
        <div className="ticket-visual-wrapper">
          <div className="skillsSection">
            <div className="innerLogoSection">
              {tech.map((techItem, index) => (
                <div key={index} className={styles.skills}>
                  {techItem.name}
                </div>
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <div className="logosSection">
            <div className="innerLogoSection">
              {tech.map((techItem, index) => (
                <img
                  key={index}
                  className={styles.logo}
                  src={techItem.logo}
                  alt={techItem.name}
                />
              ))}
            </div>
          </div>
          <div className="ticket-visual_ticket-number-wrapper">
            <div className="ticket-visual_ticket-number">{name}</div>
          </div>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <section id="skills">
      <motion.dev variants={textVariant()}>
        <p
          className={titleStyles.sectionSubText}
          style={{ marginLeft: "1rem" }}
        >
          What I have learn so far
        </p>
        <h2
          className={titleStyles.sectionHeadText}
          style={{ marginLeft: "1rem" }}
        >
          Skills.
        </h2>
      </motion.dev>
      <div className="ticketCard">
        {skills.map((skillCategory, index) => (
          <TicketCard
            key={index}
            name={skillCategory.name}
            tech={skillCategory.tech}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "Tech");

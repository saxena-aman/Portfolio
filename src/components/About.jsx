import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/about.module.css";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={styles.card}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={styles.techCard}
      >
        <img
          src={icon}
          alt="web-development"
          style={{ width: "4rem", height: "4rem", objectFit: "contain" }}
        />

        <h3
          style={{
            color: "white",
            marginTop: "1rem",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            width: "200px" /* adjust as needed */,
            whiteSpace: "normal",
            overflowWrap: "break-word",
          }}
        >
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText} style={{ marginLeft: "1rem" }}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText} style={{ marginLeft: "1rem" }}>
          Overview.
        </h2>
      </motion.dev>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className={styles.para}>
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className={styles.technologies}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/about.module.css";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const InProgress = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <h2
          className={styles.sectionHeadText}
          style={{
            textAlign: "center",
            fontSize: "24px",
            margin: "3rem",
          }}
        >
          Website Half-Baked : More Deliciousness Coming Soon!
        </h2>
      </motion.dev>
    </>
  );
};

export default SectionWrapper(InProgress, "inprogress");

import React from "react";
// import "../styles/card.css";
import styles from "../styles/card.module.css";
const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.sectionHeadText}>Languages.</div>
      {/* <div
        style={{
          height: "fit-content",
          width: "fit-content",
          margin: "2px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            height: "fit-content",
            width: "50px",
            border: "2px solid red",
            borderRadius: "10px",
            padding: "5px",
            zIndex: "5",
            color: "white",
            margin: "2px",
            textAlign: "center",
          }}
        >
          C++
        </div>

        <div
          style={{
            height: "fit-content",
            width: "50px",
            border: "2px solid red",
            borderRadius: "10px",
            padding: "5px",
            zIndex: "5",
            color: "white",
            margin: "2px",
            textAlign: "center",
          }}
        >
          C
        </div>
        <div
          style={{
            height: "fit-content",
            width: "px",
            border: "2px solid red",
            borderRadius: "10px",
            padding: "5px",
            zIndex: "5",
            color: "white",
            margin: "2px",
            textAlign: "center",
          }}
        >
          JavaScript
        </div>
      </div> */}
      <div
        style={{
          height: "fit-content",
          width: "fit-content",
          margin: "2px",
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
        }}
      >
        {/* <div className={styles.skills}>C++</div>
        <div className={styles.skills}>JavaScript</div>
        <div className={styles.skills}>Java</div>
        <div className={styles.skills}>Kotlin</div>
        <div className={styles.skills}>Kotlin</div>
        <div className={styles.skills}>Kotlin</div>
        <div className={styles.skills}>Kotlin</div> */}
      </div>
    </div>
  );
};

export default Card;

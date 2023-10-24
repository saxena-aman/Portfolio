import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/exp.module.css";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: window.innerWidth <= 768 ? "column-reverse" : "row",
        gap: "10px",
        overflow: "hidden",
        height: window.innerWidth <= 768 ? "1000px" : "fit-content",
        width: "auto",
        margin: "auto",
      }}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        style={{
          flex: window.innerWidth <= 768 ? "1" : "0.75",
          backgroundColor: "#1D1836",
          padding: "20px",
          borderRadius: "16px",
          width: "auto",
          height: "fit-content",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#ffffff",
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              style={{
                backgroundColor: "#333333",
                padding: "1rem 1.5rem",
                color: "#ffffff",
                borderRadius: "1rem",
                outline: "none",
                border: "none",
                fontWeight: 500,
              }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#ffffff",
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              style={{
                backgroundColor: "#333333",
                padding: "1rem 1.5rem",
                color: "#ffffff",
                borderRadius: "1rem",
                outline: "none",
                border: "none",
                fontWeight: 500,
              }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#ffffff",
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              Your Message
            </span>
            <textarea
              rows={2}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              style={{
                backgroundColor: "#333333",
                padding: "1rem 1.5rem",
                color: "#ffffff",
                borderRadius: "1rem",
                outline: "none",
                border: "none",
                fontWeight: 500,
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              backgroundColor: "#333333",
              padding: "0.75rem 2rem",
              borderRadius: "1rem",
              outline: "none",
              width: "fit-content",
              color: "#ffffff",
              fontWeight: 700,
              boxShadow:
                "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2)",
            }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        style={{
          flex: "1",
          height: window.innerWidth <= 768 ? "auto" : "500px",
        }}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

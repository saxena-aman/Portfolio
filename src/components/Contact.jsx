import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/exp.module.css";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formCopy = { ...form };
    setForm({
      Name: "",
      Email: "",
      Message: "",
    });
    // Add a 5-second delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
    try {
      // Replace "YOUR_API_ENDPOINT" with the actual URL of your API endpoint
      const response = await fetch(
        "https://2uah8wlh8e.execute-api.ap-south-1.amazonaws.com/default/mailing-function",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formCopy),
        }
      );
      if (response.ok) {
        console.log("Form submitted successfully");
        // Optionally, you can reset the form after successful submission
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: window.innerWidth <= 768 ? "column-reverse" : "row",
        gap: "0px",
        height: window.innerWidth <= 768 ? "1000px" : "fit-content",
      }}
    >
      <div
        style={{
          width: window.innerWidth <= 768 ? "auto" : "750px",
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
            marginLeft: window.innerWidth <= 768 ? "20px" : "50px",
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
                name="Name"
                value={form.Name}
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
                name="Email"
                value={form.Email}
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
                name="Message"
                value={form.Message}
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
            {submitted && (
              <div>
                <p>
                  My AI assistant will send you an email shortly in response to
                  your message.
                </p>
                <p>
                  Please check your Spam folder if you don't find it in your
                  inbox.
                </p>
              </div>
            )}
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
      </div>
      <div
        style={{
          width: window.innerWidth <= 768 ? "400px" : "750px",
        }}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          style={{
            flex: "1",
            height: window.innerWidth <= 768 ? "400px" : "500px",
          }}
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

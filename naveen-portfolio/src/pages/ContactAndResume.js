import img1 from "../assets/dp.png";
import "../pages/ContactAndResume.css";

import TiltedCard from "../components/TiltedCard ";

import ElectricBorder from "../components/ElectricBorder";
import resume from "../assets/Naveen_Rayapudi.pdf";

import {
  FaEnvelope,
  FaPhone,
  FaArrowUp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { color } from "framer-motion";

export default function ContactAndResume() {
  const [dimensions, setDimensions] = useState({
    containerHeight: "800px",
    containerWidth: "570px",
    imageHeight: "800px",
    imageWidth: "570px",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setDimensions({
          containerHeight: "280px",
          containerWidth: "280px",
          imageHeight: "285px",
          imageWidth: "285px",
        });
      } else {
        setDimensions({
          containerHeight: "800px",
          containerWidth: "570px",
          imageHeight: "800px",
          imageWidth: "570px",
        });
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-image-column">
          <ElectricBorder
            color="#38bdf8"
            speed={1}
            chaos={0.12}
            thickness={2}
            style={{ borderRadius: 15 }}
          >
            <TiltedCard
              imageSrc={img1}
              containerHeight={dimensions.containerHeight}
              containerWidth={dimensions.containerWidth}
              imageHeight={dimensions.imageHeight}
              imageWidth={dimensions.imageWidth}
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
            />
          </ElectricBorder>
        </div>

        <div className="contact-content-column">
          <h2 className="contact-heading">Contact Me</h2>
          <p className="contact-info-text">
            <strong>Feel free to reach out to me !</strong>
          </p>

          <p className="contact-info-text">
            <FaEnvelope size={24} color="#38bdf8" />
            Email:{" "}
            <a
              href="mailto:rayapudinaveen777@gmail.com"
              className="contact-link"
            >
              rayapudinaveen777@gmail.com
            </a>
          </p>

          <p className="contact-info-text">
            <a
              href="https://github.com/naveen777-github"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaGithub size={26} color="#38bdf8" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rayapudi-naveen-6042a5190"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaLinkedin size={24} color="#38bdf8" />
              LinkedIn{" "}
            </a>
          </p>

          <div className="download-btn">
            <button
              onClick={() => window.open(resume, "_blank")}
              className="resume-download-btn"
            >
              Download Resume
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            id="get-in-touch"
            className="contact-form"
          >
            {" "}
            <div className="contact-form-title">
              <h2 className="contact-form-heading">
                <i className="contact-form-icon fas fa-paper-plane"></i> Get In
                Touch
              </h2>
            </div>
            <div className="form-input-group">
              <div className="form-input-wrapper">
                <i className="form-input-icon fas fa-user"></i>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-input-group">
              <div className="form-input-wrapper">
                <i className="form-input-icon fas fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-input-group">
              <div className="form-input-wrapper">
                <i className="form-input-icon fas fa-comment-dots"></i>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  required
                  className="form-textarea"
                ></textarea>
              </div>
            </div>
            <button type="submit" className="form-submit-btn">
              <i className="fas fa-paper-plane"></i> Submit Form
            </button>
            <div id="result" className="form-result"></div>
          </form>
        </div>
      </div>

      <footer className="main-footer" id="contactme">
        <p>
          &copy; {new Date().getFullYear()} Naveen Rayapudi. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

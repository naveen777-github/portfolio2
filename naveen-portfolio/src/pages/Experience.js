import { useState } from "react";
import react from "react";
import careerpath from "../assets/Carrerpath (2).png";
import "./Experience.css";
import { motion } from "framer-motion";
const experiences = [
  {
    id: "apssdc",
    role: "Software Development Intern",
    company: "APSSDC",
    date: "Jan 2023 – Jun 2023",
    location: "India (Remote)",
    tagline: "Built UI components and APIs to support internal tools.",
    bullets: [
      "Implemented responsive UI with HTML/CSS/JS and improved usability.",
      "Built REST APIs to connect frontend with backend services.",
      "Performed unit + integration testing to reduce defects.",
      "Collaborated in Agile sprints with code reviews and task tracking.",
      "Supported continuous improvement by identifying opportunities to enhance code quality and  performance.",
    ],
    tech: ["Java", "JavaScript", "HTML", "CSS", "REST APIs", "Git"],
  },
  {
    id: "aicte",
    role: "AWS Cloud Intern",
    company: "AICTE",
    date: "OCT 2021 – DEC 2021",
    location: "India (Remote)",
    tagline: "Built and supported cloud-based applications and services.",
    bullets: [
      "Deployed and supported cloud-based applications using AWS (EC2, S3, Lambda).",
      "Built a sample full-stack application demonstrating cost-optimized architecture and automation.",
      "Monitored systems using CloudWatch to support troubleshooting and reliability.",
      "Configured IAM roles and policies for secure access control.",
    ],
    tech: ["AWS", "EC2", "S3", "Cloud Watch", "Lambda"],
  },
];

export default function ExperienceTimeline() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="exp">
      <section className="imagecontainer">
        <motion.img
          src={careerpath}
          alt="logo"
          className="careerpath"
          animate={{ rotateX: 360 }}
          transition={{ duration: 0.4 }}
        />{" "}
        <motion.div
          className="title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="about-container">
            <h2 className="about-heading">About</h2>

            <p className="about-text">
              Entry-Level <span className="highlight">Software Developer</span>{" "}
              with hands-on experience building internal and customer-facing
              applications using{" "}
              <span className="highlight">Java, JavaScript, and SQL</span>.
              Strong foundation in{" "}
              <span className="highlight">
                full-stack development, RESTful APIs
              </span>
              , Agile workflows, and cloud-based deployments. Experienced in
              writing, testing, and deploying code, supporting data-driven
              workflows, and collaborating within cross-functional teams.
              Motivated to contribute to{" "}
              <span className="highlight">
                internal systems, automation, and continuous improvement
              </span>{" "}
              in fast-paced, product-driven environments.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="expWrap">
        <h1 className="expTitle">Experience</h1>
        <p className="expSub">
          A quick timeline of my internships, with details you can expand.
        </p>

        <div className="timeline">
          <div className="timelineLine" />

          {experiences.map((exp) => {
            const isOpen = openId === exp.id;

            return (
              <article key={exp.id} className="item">
                <div className="dot" />

                <div className="card">
                  <div className="topRow">
                    <div>
                      <h2 className="role">{exp.role}</h2>
                      <p className="company">{exp.company}</p>
                      <p className="meta">
                        📅 {exp.date} • 📍 {exp.location}
                      </p>
                    </div>

                    <button
                      className="btn"
                      onClick={() => toggle(exp.id)}
                      aria-expanded={isOpen}
                      aria-controls={`panel-${exp.id}`}
                    >
                      {isOpen ? "Hide details" : "View details"}
                      <span className={`arrow ${isOpen ? "arrowUp" : ""}`}>
                        ⌄
                      </span>
                    </button>
                  </div>

                  <p className="tagline">{exp.tagline}</p>

                  <div className="chips">
                    {exp.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    id={`panel-${exp.id}`}
                    className={`panel ${isOpen ? "panelOpen" : "panelClosed"}`}
                  >
                    <div className="panelInner">
                      <ul className="bullets">
                        {exp.bullets.map((b, i) => (
                          <li key={i}>
                            <span className="point">•</span>

                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}

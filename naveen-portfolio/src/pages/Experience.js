import { useState } from "react";
import react from "react";
import careerpath from "../assets/Carrerpath (2).png";
import "./Experience.css";

const experiences = [
  {
    id: "apssdc",
    role: "Software Development Intern",
    company: "APSSDC",
    date: "Jan 2023 – Jun 2023",
    location: "India (On-site)",
    tagline: "Built UI components and APIs to support internal tools.",
    bullets: [
      "Implemented responsive UI with HTML/CSS/JS and improved usability.",
      "Built REST APIs to connect frontend with backend services.",
      "Performed unit + integration testing to reduce defects.",
      "Collaborated in Agile sprints with code reviews and task tracking.",
    ],
    tech: ["Java", "JavaScript", "HTML", "CSS", "REST APIs", "Git"],
  },
  {
    id: "aicte",
    role: "Data Science Intern",
    company: "AICTE",
    date: "2022 – 2022",
    location: "Remote",
    tagline: "Worked on data cleaning, analysis, and basic ML workflows.",
    bullets: [
      "Cleaned datasets and built exploratory analysis notebooks.",
      "Trained baseline ML models and compared metrics.",
      "Communicated findings with clear charts and summaries.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
  },
];

export default function ExperienceTimeline() {
  const [openId, setOpenId] = useState(experiences[0]?.id);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="exp">
      <section className="imagecontainer">
        {" "}
        <img src={careerpath} className="careerpathimage" />{" "}
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

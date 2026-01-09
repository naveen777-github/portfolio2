import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiSpring, SiPostman } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import painting from "../assets/painting.png";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        {/* Badge */}
        <motion.span
          className="badge"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Open to Software / Data roles
        </motion.span>

        {/* Title slides from left */}
        <motion.h1
          className="title"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hi, I’m Naveen Rayapudi.
        </motion.h1>

        <div className="hero2">
          {/* LEFT: Text */}
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Master’s student in Applied Computer Science at Concordia University
            with hands-on experience building full-stack applications and
            data/ML projects using Python, SQL, React, and cloud technologies.
          </motion.p>

          {/* RIGHT: Image */}
          <motion.div
            className="heroRight"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={painting} alt="Data visualization" className="heroImg" />
          </motion.div>

          {/* Buttons slide up */}
          <motion.div
            className="actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link className="btn btn-primary" to="/experience">
              View Projects
            </Link>

            <a className="btn btn-secondary" href="/resume.pdf" download>
              Download Resume
            </a>
          </motion.div>

          {/* Social links fade in */}
          <motion.div
            className="social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={26} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={26} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </section>
      {/* Software Engineering Section */}
      <section className="split">
        {/* GIF – slides from LEFT */}
        <motion.img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFkOHN1dml2ajB4NWhwOWJ0bTliN25iODRvdGdubXk2dXBneXV4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZgTR3UQ9XAWDvqy9jv/giphy.gif"
          alt="Software Engineering"
          className="gif right"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        />

        {/* Stack – slides from RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Software Engineering Stack</h2>

          <div className="stack">
            <div className="stack-item">
              <FaJava size={26} />
              <span>Java</span>
            </div>

            <div className="stack-item">
              <FaPython size={26} />
              <span>Python</span>
            </div>

            <div className="stack-item">
              <FaReact size={26} />
              <span>React</span>
            </div>

            <div className="stack-item">
              <FaNodeJs size={26} />
              <span>Node.js</span>
            </div>

            <div className="stack-item">
              <SiPostman size={26} />
              <span>REST APIs</span>
            </div>

            <div className="stack-item">
              <FaGitAlt size={26} />
              <span>Git & GitHub</span>
            </div>

            <div className="stack-item">
              <DiJavascript1 size={26} />
              <span>OOP</span>
            </div>

            <div className="stack-item">
              <SiSpring size={26} />
              <span>Data Structures</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Data / ML Section */}
      <section className="split ">
        {/* Stack – slides from LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Data & ML Stack</h2>

          <div className="stack">
            {[
              "Python",
              "SQL",
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "PyTorch",
              "NLP",
              "AWS",
            ].map((item) => (
              <div key={item} className="stack-item">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* GIF – slides from RIGHT */}
        <motion.img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDA2NnFpaWowNW1mNjAyNmt4YXZtM2xyOGM4OTJ4NGZuZzk3dGNrMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h8RDGogSns9wpOJFzR/giphy.gif"
          alt="Data Analytics Visualization"
          className="gif left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        />
      </section>
    </main>
  );
}

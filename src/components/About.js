"use client";
import "@/styles/about.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">About Me</h2>

          <div className="about-content">
            <div className="about-card">
              <h3>Passionate Developer</h3>
              <p>
                I specialize in building modern web applications with React and Node.js,
                focusing on clean code and intuitive user experiences.
              </p>
            </div>

            <div className="about-card">
              <h3>Problem Solver</h3>
              <p>
                I love tackling complex challenges and turning them into elegant,
                scalable solutions while staying up-to-date with industry trends.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

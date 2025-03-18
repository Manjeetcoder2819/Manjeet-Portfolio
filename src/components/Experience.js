"use client";

import { motion } from "framer-motion";
import "@/styles/experience.css";

const experiences = [
  {
    company: "Tech Corp",
    position: "Senior Software Engineer",
    period: "2021 - Present",
    responsibilities: [
      "Led a team of 5 developers in building a microservices architecture",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    company: "StartupX",
    position: "Full Stack Developer",
    period: "2019 - 2021",
    responsibilities: [
      "Developed and maintained multiple client-facing applications",
      "Optimized database queries improving application performance by 40%",
      "Collaborated with design team to implement new features",
    ],
  },
  {
    company: "Digital Agency",
    position: "Frontend Developer",
    period: "2017 - 2019",
    responsibilities: [
      "Built responsive web applications using React and TypeScript",
      "Implemented state management solutions using Redux",
      "Worked directly with clients to gather requirements",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="experience-container"
      >
        <h2 className="experience-title">Work Experience</h2>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>{exp.position}</h3>
              <p className="company-period">
                {exp.company} | {exp.period}
              </p>
              <ul>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

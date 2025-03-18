"use client";

import { motion } from "framer-motion";
import { GraduationCap, Scroll, Award } from "lucide-react";
import "@/styles/education.css";

const education = [
  {
    type: "Degree",
    title: "BSc in Computer Science",
    institution: "University of Technology",
    year: "2013 - 2017",
    icon: GraduationCap,
  },
  {
    type: "Certification",
    title: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    year: "2020",
    icon: Scroll,
  },
  {
    type: "Achievement",
    title: "Distinguished Performance Award",
    institution: "Tech Corp",
    year: "2022",
    icon: Award,
  },
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="education-container"
      >
        <h2 className="education-title">Education & Achievements</h2>

        <div className="education-grid">
          {education.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                className="education-card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="icon-container">
                  <IconComponent className="icon" />
                </div>
                <span className="education-type">{item.type}</span>
                <h3 className="education-title-text">{item.title}</h3>
                <p className="education-institution">{item.institution}</p>
                <p className="education-year">{item.year}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

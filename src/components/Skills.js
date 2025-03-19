"use client";

import { motion } from "framer-motion";
import { 
  SiReact, SiTypescript, SiNodedotjs, SiNextdotjs, SiTailwindcss, 
  SiGit, SiDocker, SiGithub, SiGraphql, SiPostgresql 
} from "react-icons/si";
import "@/styles/Skills.css"; // Import your CSS file

const skills = [
  { icon: SiReact, name: "React" },
  { icon: SiJavascript, name: "javaScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiGit, name: "Git" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiGraphql, name: "GraphQL" },
  { icon: SiPostgresql, name: "PostgreSQL" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="skills-container"
      >
        <h2 className="skills-title">Technical Skills</h2>

        <div className="skills-grid">
          {skills.map(({ icon: Icon, name }) => (
            <motion.div 
              key={name} 
              className="skill-card"
              whileHover={{ scale: 1.1 }}
            >
              <Icon className="skill-icon" />
              <span className="skill-name">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

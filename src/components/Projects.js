"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import "@/styles/projects.css"; // Import CSS

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React and Node.js.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    tags: ["React", "TypeScript", "Firebase"],
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Next.js", "D3.js", "TailwindCSS"],
    github: "https://github.com",
    live: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="projects-title">Featured Projects</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Custom Card Component
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="w-full">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="project-image"
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-buttons">
          <CustomButton href={project.github} label="Code" icon={<Github />} outlined />
          <CustomButton href={project.live} label="Demo" icon={<ExternalLink />} />
        </div>
      </div>
    </div>
  );
}

// Custom Button Component
function CustomButton({ href, label, icon, outlined = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-btn ${outlined ? "outlined" : "primary"}`}
      aria-label={label}
    >
      {icon}
      {label}
    </a>
  );
}

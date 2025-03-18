"use client";
import "@/styles/hero.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="hero-title">
            Hi, I am <span className="hero-name">Manjeet Gupta</span>
            <br />
            <span className="hero-highlight">Software Developer</span>
          </h1>
          <p className="hero-subtitle">
            Passionate about building human-centered digital experiences.
            Currently focused on crafting accessible and scalable solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <CustomButton href="#contact" label="Get in Touch" primary />
            <CustomButton href="#projects" label="View Projects" outlined />
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/image.png"
            alt="Portrait of Manjeet Gupta, a software developer"
            width={400}
            height={400}
            priority
            className="hero-image"
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}

// Custom Button Component
function CustomButton({ href, label, primary = false, outlined = false }) {
  return (
    <a
      href={href}
      className={`hero-btn ${primary ? "primary" : ""} ${outlined ? "outlined" : ""}`}
      aria-label={label}
    >
      {label}
    </a>
  );
}

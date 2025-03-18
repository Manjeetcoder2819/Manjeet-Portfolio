"use client";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si"; // Updated SiTwitter to SiX
import { Mail } from "lucide-react";
import "@/styles/footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Footer Top Section */}
        <div className="footer-content">
          <h3 className="footer-title">Let&apos;s Connect!</h3> {/* Fixed unescaped apostrophe */}
          <p className="footer-text">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>

          {/* Social Links */}
          <div className="footer-socials">
            {socialLinks.map(({ href, Icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <Icon className="icon-style" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>© {currentYear} John Doe. All rights reserved.</p>
          <nav className="footer-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  { href: "https://github.com", Icon: SiGithub },
  { href: "https://linkedin.com", Icon: SiLinkedin },
  { href: "https://x.com", Icon: SiX }, // Updated Twitter to X
  { href: "mailto:john@example.com", Icon: Mail },
];

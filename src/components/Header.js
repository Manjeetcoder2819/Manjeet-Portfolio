"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "@/styles/header.css"; // Ensure correct import path

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-logo">
          Manjeet Gupta
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar desktop-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-item">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-toggle md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden">
          <nav>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

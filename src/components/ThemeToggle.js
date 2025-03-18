"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import "../styles/ThemeToggle.css"; // Import CSS

export function ThemeToggle() {
  const [theme, setThemeState] = useState("system");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const doc = window.document.documentElement;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    const themeSetting = theme === "system" ? systemTheme : theme;
    doc.classList.remove("light", "dark");
    doc.classList.add(themeSetting);
  }, [theme]);

  return (
    <div className="theme-toggle-container">
      {/* Theme Toggle Button */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="theme-toggle-btn"
      >
        <Sun className={`theme-icon ${theme === "dark" ? "hidden" : "block"}`} />
        <Moon className={`theme-icon ${theme === "dark" ? "block" : "hidden"}`} />
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="theme-dropdown">
          <button 
            onClick={() => { setThemeState("light"); setMenuOpen(false); }}
            className="theme-option"
          >
            Light
          </button>
          <button 
            onClick={() => { setThemeState("dark"); setMenuOpen(false); }}
            className="theme-option"
          >
            Dark
          </button>
          <button 
            onClick={() => { setThemeState("system"); setMenuOpen(false); }}
            className="theme-option"
          >
            System
          </button>
        </div>
      )}
    </div>
  );
}

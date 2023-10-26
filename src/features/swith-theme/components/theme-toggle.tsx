"use client";

import { useContext } from "react";
import { ThemeContext } from "@/application/providers/context/ThemeContext";
import "./theme-toggle.css";

export default function ThemeToggle() {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <button onClick={switchTheme} type="button">
      <label htmlFor="theme" className="theme">
        <span>Light</span>
        <span className="theme__toggle-wrap">
          <input
            type="checkbox"
            className="theme__toggle"
            checked={theme === "dark"}
            id="theme"
            role="switch"
            name="theme"
            value={theme}
          />
          {/* <span className="theme__fill" /> */}
          <span className="theme__icon">
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
          </span>
        </span>
        <span>Dark</span>
      </label>
    </button>
  );
}

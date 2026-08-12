import { useState, useEffect } from "react";
import { audioEngine } from "../utils/audioEngine.js";

export default function SoundscapeToggle() {
  const [active, setActive] = useState(false);
  const [ambient, setAmbient] = useState(false);

  const handleToggle = () => {
    const isEnabled = audioEngine.toggleSound();
    setActive(isEnabled);
    if (isEnabled) {
      const isAmb = audioEngine.toggleAmbient();
      setAmbient(isAmb);
    } else {
      setAmbient(false);
    }
  };

  return (
    <div className="soundscape-widget" aria-label="音景 / Soundscape Audio Controls">
      <button
        type="button"
        className={`soundscape-btn ${active ? "is-active" : ""}`}
        onClick={handleToggle}
        onMouseEnter={() => audioEngine.playWoodClick(0.1)}
        title={active ? "音景をオフにする / Mute Soundscape" : "音景をオンにする / Enable Soundscape"}
        aria-pressed={active}
      >
        <span className="soundscape-icon">
          {active ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          )}
        </span>
        <span className="soundscape-label">
          {active ? "音景 ON" : "音景 OFF"}
        </span>
        {active && (
          <span className="soundscape-bars" aria-hidden="true">
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </span>
        )}
      </button>
    </div>
  );
}

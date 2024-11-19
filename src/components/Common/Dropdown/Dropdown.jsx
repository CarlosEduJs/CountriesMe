import { useState, useEffect, useRef } from "react";

import {useTheme} from "../../../Hooks/useTheme";

export default function Dropdown({ buttonContent, children, position }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { themeName } = useTheme();

  const themeSettings = {
    dark: {
      bgDropdown: "bg-dark-dark-blue",
      textColor: "text-light-very-light-gray",
    },
    light: {
      bgDropdown: "bg-white",
      textColor: "text-light-very-dark-blue",
    },
  };

  const theme = themeSettings[themeName] || themeSettings.light;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button onClick={() => setIsOpen(true)}>{buttonContent}</button>
      {isOpen && (
        <div
          className={`absolute ${
            position === "left" ? "left-0" : "right-0"
          } mt-2 ${theme.bgDropdown} ${
            theme.borderNote
          } rounded-md shadow-lg z-10`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

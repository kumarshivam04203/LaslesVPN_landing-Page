import React from "react";

function IconButton({ type, disabled, icon, onClick }) {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <img
      className={`icon-button ${type} ${disabled ? "disabled" : ""}`}
      src={icon.href}
      alt="icon"
      onClick={handleClick}
      style={{
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        border: `2px solid ${type === "primary" ? "#F53838" : "transparent"}`,
        backgroundColor: disabled
          ? "#DDD"
          : type === "primary"
          ? "#F53838"
          : "white",
        cursor: disabled ? "not-allowed" : "pointer",
        padding: "5px",
        display: "flex",
      }}
    />
  );
}

export default IconButton;

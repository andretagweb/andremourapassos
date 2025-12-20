import React from "react";

function HeroKeyModal({
  id,
  className,
  onMouseEnter,
  onMouseLeave,
  onClick,
  children,
}) {
  return (
    <div
      id={id}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="key-image"></div>

      <div className="key-modal">
        <div className="key-image"></div>
        {children}
      </div>
    </div>
  );
}

export default HeroKeyModal;

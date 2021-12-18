import React from "react";

function MenuIcon({ icon, isHome }) {
  return (
    <div className={`iconContainer ${isHome ? `iconBg` : ``}`}>
      <i>{icon}</i>
    </div>
  );
}

export default MenuIcon;

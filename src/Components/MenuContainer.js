import React from "react";

function MenuContainer({ link, icon, isHome }) {
  return (
    <li className={isHome ? `active` : ``}>
      <a href={link}>
        <span className="icon">{icon}</span>
      </a>
    </li>
  );
}

export default MenuContainer;

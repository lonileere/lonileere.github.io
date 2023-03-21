import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const LinkArray = [
    { address: "/", label: "Home" },
    { address: "contact", label: "Contact" },
    { address: "projects", label: "Projects" },
  ];

  return (
    <ul className="text-xl text-grey font-bold space-y-2">
      {LinkArray.map(({ address, label }) => (
        <li>
          <NavLink className="hover:text-gray-500" to={address}>
            {({ isActive }) => (
              <span className={isActive && "text-black"}>
                {isActive ? "-" : label}
              </span>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

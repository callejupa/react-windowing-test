import React from "react";
import { Link } from "@reach/router";

import { active } from "./menu.module.css";

export const Menu = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="no-virtualized">
          <span>No virtualized</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="virtualized">
          <span>Virtualized</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="virtualized-scrolling">
          <span>Virtualized Scrolling</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="virtualized-lazy">
          <span>Virtualized lazy</span>
        </NavLink>
      </li>
    </ul>
  </nav>
);

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    getProps={({ isCurrent }) => ({
      className: isCurrent ? active : null
    })}
  >
    {children}
  </Link>
);

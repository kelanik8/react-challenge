import React from "react";
import { NavHeader } from "./styles";

const Navbar = () => (
  <NavHeader>
    <div className="container">
      <div className="navbar">
        <h1 className="logo">DEMO Streaming</h1>
        <nav>
          <ul className="navigation">
            <li>
              <a href="#">Log in</a>
            </li>
            <li>
              <button>Start your free trail</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </NavHeader>
);

export default Navbar;

import React from "react";

import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="ui secondary  menu">
      <NavLink exact className="item" to="/">
        Home
      </NavLink>
      <NavLink className="item" to="/recipes">
        Recipes
      </NavLink>
      <NavLink className="item" to="/settings">
        Settings
      </NavLink>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search NavLink icon" />
          </div>
        </div>
        <NavLink className="item" to="/logout">
          Logout
        </NavLink>
      </div>
    </div>
  );
}

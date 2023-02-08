import { Link } from "react-router-dom";
import React from "react";
import { FaUserAlt, FaHistory } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { TbBarbell } from "react-icons/tb";

function Navbar() {
  return (
    <header className="header">
      {/**Center our body */}
      <div className="logo">
        <Link to="/">Create Goal</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/history">
              <FaHistory /> History
            </Link>
          </li>
          <li>
            <Link to="/calculator">
              <TbBarbell /> Calculator
            </Link>
          </li>
          <li>
            <Link to="/login">
              <MdOutlineLogin /> Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              <FaUserAlt /> Register
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

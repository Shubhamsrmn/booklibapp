import React from "react";
import logo from "../../utils/images/icons8-book-64.png";
import "./header.css";
import { useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="nav_container">
        <li>
          <div className="logo_container">
            <span>
              <img src={logo} alt="books images" width={32} height={32} />
            </span>
            <span className="logo_title">Best Books Library</span>
          </div>
        </li>
        <li>
          <button className="logout_btn" onClick={() => navigate("/login")}>
            Log Out
          </button>
        </li>
      </nav>
    </header>
  );
};

export default Header;

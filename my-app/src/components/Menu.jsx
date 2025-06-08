import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="navigation">
      <div className="classManagement">
        <Link to="/class-list">
        <button className="drawersBtn" id="classManagementBtn">
          Správa tříd
        </button>
        </Link>
      </div>
      <div className="groupFormation">
        <Link to="/groups">
        <button className="drawersBtn" id="groupFormationBtn">
          Tvorba skupin
        </button>
        </Link>
      </div>
      <div className="instructions">
        <Link to="/instruction">
        <button className="drawersBtn" id="instructionsBtn">
          Návod
        </button>
        </Link>
      </div>
      <div className="timer">
        <Link to="/timer">
        <button className="drawersBtn" id="timerBtn">
          Časomíra
        </button>
        </Link>
      </div>
      <div className="aboutUs">
        <Link to="/about-us">
        <button className="drawersBtn" id="aboutUsButton">
          O nás
        </button>
        </Link>
      </div>
    </div>
  );
};

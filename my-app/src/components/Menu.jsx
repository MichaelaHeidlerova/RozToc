import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="navigation">
      <div className="classManagement">
        <button className="drawersBtn" id="classManagementBtn">
          Správa tříd
        </button>
      </div>
      <div className="groupFormation">
        <button className="drawersBtn" id="groupFormationBtn">
          Tvorba skupin
        </button>
      </div>
      <div className="instructions">
        <Link to="/instruction">
        <button className="drawersBtn" id="instructionsBtn">
          Návod
        </button>
        </Link>
      </div>
      <div className="timer">
        <button className="drawersBtn" id="timerBtn">
          Časomíra
        </button>
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

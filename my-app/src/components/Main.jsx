export const Main = () => {
  return (
    <div className="layout-wrapper">
      <div className="teachersDesk">
        <div className="date-display">
          <h2>Dnes je:</h2>
        </div>
        <div className="desk2"></div>
      </div>

      <div className="main-container">
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
            <button className="drawersBtn" id="instructionsBtn">
              Návod
            </button>
          </div>
          <div className="timer">
            <button className="drawersBtn" id="timerBtn">
              Časomíra
            </button>
          </div>
          <div className="aboutUs">
            <button className="drawersBtn" id="aboutUsButton">
              O nás
            </button>
          </div>
        </div>

        <div className="board">
          <p>Nenechá je sedět v klidu!</p>
          <p>Propojí je se známými i neznámými!</p>
          <p>Vytvoří skvělé týmy!</p>
          <p>To je náš projekt, co Vaše žáky doslova RozTočí!</p>
          <div className="mite">
            <img src="./pages/HomePage/img/mite.jpg" alt="Mite" />
          </div>
        </div>
      </div>
    </div>
  );
};

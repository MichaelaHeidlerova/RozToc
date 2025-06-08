import mite from "../../img/mite.jpg";

export const Intro = () => {
  return (
    <div className="intro">
      <p>Nenechá je sedět v klidu!</p>
      <p>Propojí je se známými i neznámými!</p>
      <p>Vytvoří skvělé týmy!</p>
      <p>To je náš projekt, co Vaše žáky doslova RozTočí!</p>
      <div className="mite">
        <img src={mite} alt="Mite" />
      </div>
    </div>
  );
};

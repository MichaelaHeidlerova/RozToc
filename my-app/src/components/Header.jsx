import { Link } from "react-router-dom";
import mites from "../img/mites.JPG";
import schoolThings from "../img/schoolThings.jpg";

export const Header = () => {
  return (
    <div className="header">
      <div className="mites">
        <img src={mites} alt="Mites" />
      </div>
      <Link to="/">
      <div className="title">
        <h1>RozToč</h1>
      </div>
      </Link>
      <div className="schoolThings">
        <img src={schoolThings} alt="School things" />
      </div>
    </div>
  );
};

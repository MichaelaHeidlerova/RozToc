import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="mites">
        <img src="./pages/HomePage/img/mites.JPG" alt="Mites" />
      </div>
      <Link to="/">
      <div className="title">
        <h1>RozToč</h1>
      </div>
      </Link>
      <div className="schoolThings">
        <img src="./pages/HomePage/img/schoolThings.jpg" alt="School things" />
      </div>
    </div>
  );
};

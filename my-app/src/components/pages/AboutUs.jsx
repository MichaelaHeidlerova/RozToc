import foto_M from "../../img/foto_M.jpg";
import foto_G from "../../img/foto_G.jpeg";

export const AboutUs = () => {
  return (
    <div className="about-us">
        <div className="pageTitle">
          <h2>O NÁS</h2>
        </div>
      <p className="about-us-text">
      Jsme Gábina a Míša a společně tvoříme super tým!
      <br />      
      Mrkni na naše GitHuby:
      </p>
      <div className="icons-wrapper">
        <a href="https://github.com/GabinaUrbanova?tab=packages">
          <img
            src={foto_G}
            alt="Ikona_Gábina"
            className="icon-button"
          />
        </a>
        <a href="https://github.com/MichaelaHeidlerova">
          <img
            src={foto_M}
            alt="Ikona_Míša"
            className="icon-button"
          />
        </a>
      </div>
    </div>
  );
};

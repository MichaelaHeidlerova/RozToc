import foto_M from "../../img/foto_M.jpg";
import foto_G from "../../img/foto_G.jpeg";

export const AboutUs = () => {
  return (
    <div className="about-us">
        <div className="pageTitle">
          <h2>O NÁS</h2>
        </div>
      <p>
      Jsme Gábina a Míša a společně tvoříme super tým!
      Mrkni na naše GitHuby:
      </p>
      <div class="icons-wrapper">
        <a href="https://github.com/GabinaUrbanova?tab=packages">
          <img
            src={foto_G}
            alt="Ikona_Gábina"
            class="icon-button"
          />
        </a>
        <a href="https://github.com/MichaelaHeidlerova">
          <img
            src={foto_M}
            alt="Ikona_Míša"
            class="icon-button"
          />
        </a>
      </div>
    </div>
  );
};

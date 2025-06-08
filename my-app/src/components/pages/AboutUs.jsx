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
            src="./pages/HomePage/img/foto_G.jpeg"
            alt="Ikona_Gábina"
            class="icon-button"
          />
        </a>
        <a href="https://github.com/MichaelaHeidlerova">
          <img
            src="./pages/HomePage/img/foto_M.jpg"
            alt="Ikona_Míša"
            class="icon-button"
          />
        </a>
      </div>
    </div>
  );
};

export const Vysledek = ({ vysledek }) => {
  return (
    <div>
      <div className="pageTitle">
        <h2>VÝSLEDNÉ ROZDĚLENÍ</h2>
      </div>
      <ul>
        {vysledek.map((skupina, index) => (
          <li key={index}>
            <h3>Skupina {index + 1}</h3>
            <ul>
              {skupina.map((zak) => (
                <li key={zak.celeJmeno}>{zak.celeJmeno}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

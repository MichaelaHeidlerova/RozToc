import { useState, useEffect } from 'react';

export const Nepritomnost = ({ setStep, aktivniTrida }) => {
  const [pritomniZaci, setPritomniZaci] = useState({});
  const vsichniZaci = JSON.parse(localStorage.getItem('seznamZaku')) || [];

  const zaci = vsichniZaci.filter((zak) => zak.trida === aktivniTrida);

  useState(() => {
    const initialPritomni = {};
    zaci.forEach((zak) => {
      initialPritomni[zak.celeJmeno] = true;
    });
    setPritomniZaci(initialPritomni);
  }, [zaci]);

  const handlePritomnostChange = (celeJmeno) => {
    setPritomniZaci((prevState) => ({
      ...prevState,
      [celeJmeno]: !prevState[celeJmeno],
    }));
  };

  return (
    <div>
      <div className="pageTitle">
        <h2>OZNAČ NEPŘÍTOMNÉ ŽAKY</h2>
      </div>
      <p>Zde bude správa nepřítomností studentů.</p>
      <ul>
        {zaci.map((zak) => (
          <li key={zak.celeJmeno}>
            <label>
              <input
                type="checkbox"
                checked={pritomniZaci[zak.celeJmeno]}
                onChange={() => handlePritomnostChange(zak.celeJmeno)}
              />
              {zak.celeJmeno}
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const pritomniZaciList = zaci.filter(
            (zak) => pritomniZaci[zak.celeJmeno],
          );
          console.log('Přítomní žáci:', pritomniZaciList);
          setStep('vlastnosti');
        }}
      >
        Pokračovat na vlastnosti
      </button>
    </div>
  );
};

import { useState } from 'react';

export const Nepritomnost = ({
  setStep,
  aktivniTrida,
  zaciVeSkupine,
  setZaciVeSkupine,
}) => {
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
        <h2>OZNAČ PŘÍTOMNÉ ŽAKY</h2>
      </div>
      <ul className='no-margin-padding'>
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
      {zaci.length === 0 ? (
        <p className='emptyList'>Žádní žáci ve třídě {aktivniTrida}.</p>
      ) : (
        <div className='character-div'>
        <button className='character'
          onClick={() => {
            const pritomniZaciList = zaci.filter(
              (zak) => pritomniZaci[zak.celeJmeno],
            );
            setZaciVeSkupine(pritomniZaciList);
            setStep('vlastnosti');
          }}
        >
          Pokračovat na vlastnosti
        </button>
        </div>
      )}

    </div>
  );
};

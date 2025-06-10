import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Tooltip from './Tooltip';
import trashIcon from "./trash.jpg";

export const ListDetail = () => {
  const params = useParams();
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('seznamZaku')) || [],
  );

  // Formulářové stavy (každý input má svůj)
  const [celeJmeno, setCeleJmeno] = useState('');
  const [pohlavi, setPohlavi] = useState('0');
  const [bystrost, setBystrost] = useState('');
  const [samostatnost, setSamostatnost] = useState('');
  const [socialni, setSocialni] = useState('');

  // Pomocná funkce: kontroluje, že hodnoty jsou v rozmezí 1–5
  const isValidValue = (val) => {
    const num = Number(val);
    return Number.isInteger(num) && num >= 1 && num <= 5;
  };

  // Celková validace formuláře
  const isFormValid =
    celeJmeno.trim() !== '' &&
    isValidValue(bystrost) &&
    isValidValue(samostatnost) &&
    isValidValue(socialni);

  const handleAdd = () => {
    if (!isFormValid) return; // Ochrana proti ručnímu spuštění

    const newEntry = {
      celeJmeno,
      pohlavi: Number(pohlavi),
      bystrost: Number(bystrost),
      samostatnost: Number(samostatnost),
      socialni: Number(socialni),
      trida: params.id,
    };
    const novySeznam = [...list, newEntry];
    setList(novySeznam);

    // Vyčištění formuláře
    setCeleJmeno('');
    setPohlavi('0');
    setBystrost('');
    setSamostatnost('');
    setSocialni('');
    save(novySeznam);
  };
  const save = (seznamKulozeni) => {
    localStorage.setItem('seznamZaku', JSON.stringify(seznamKulozeni));
  };

  const remove = (plneJmeno) => {
    const novySeznam = list.filter((row) => {
      return row.celeJmeno !== plneJmeno;
    });
    setList(novySeznam);
    save(novySeznam);
  };
  const navigate = useNavigate();
  const removeClass = () => {
    if (window.confirm('Opravdu chceš smazat třídu?') === false) {
      return;
    }

    const seznamTrid = JSON.parse(localStorage.getItem('seznamTrid'));
    const upravenySeznamTrid = seznamTrid.filter((row) => {
      return row.nazevTridy !== params.id;
    });
    localStorage.setItem('seznamTrid', JSON.stringify(upravenySeznamTrid));
    const upravenySeznamZaku = list.filter((row) => {
      return row.trida !== params.id;
    });
    save(upravenySeznamZaku);
    navigate('/class-list');
  };

  return (
    <div className="list-detail">
      <div className="pageTitle">
        <h2>{params.id}</h2>
        <img
          src={trashIcon}
          alt="Odebrat třídu"
          className="removeClassIcon"
          onClick={removeClass}
        />
      </div>
      <table className="students-table">
        <thead>
          <tr>
            <th className="thVlastnosti">Příjmení a jméno</th>
            <th className="thVlastnosti">Pohlaví</th>
            <th>
              <Tooltip
                content={
                  <>
                    1 - Extrémně nadaný a bystrý
                    <br />
                    2 - Nadprůměrný
                    <br />
                    3 - Průměrný
                    <br />
                    4 - Podprůměrný
                    <br />
                    5 - Slabý
                  </>
                }
              >
                Bystrost
              </Tooltip>
            </th>
            <th>
              <Tooltip
                content={
                  <>
                    1 - Vysoce samostatný/proaktivní 
                    <br />
                    2 - Spíše samostatný
                    <br />
                    3 - Průměrný/občas potřebuje podporu 
                    <br />
                    4 - Spíše nesamostatný
                    <br />
                    5 - Potřebuje neustálé vedení/nesamostatný 
                  </>
                }
              >
                Samostatnost
              </Tooltip>
            </th>
            <th>
              <Tooltip
                content={
                  <>
                    1 - Vůdce/motivátor 
                    <br />
                    2 - Aktivní spolupracovník 
                    <br />
                    3 - Průměrný
                    <br />
                    4 - Pasivní/tichý
                    <br />
                    5 - Konfliktní/nespolupracující 
                  </>
                }
              >
                Soc. dovednosti
              </Tooltip>
            </th>
            <th className="thVlastnosti">Přidání/odebrání žáka</th>
          </tr>
        </thead>
        <tbody>
          {list
            ?.filter((row) => {
              return row.trida === params.id;
            })
            .map((row) => {
              const vysledek = row.pohlavi === 0 ? 'Muž' : 'Žena';

              return (
                <tr key={row.celeJmeno}>
                  <td className="tdJmeno">{row.celeJmeno}</td>
                  <td>{vysledek}</td>
                  <td>{row.bystrost}</td>
                  <td>{row.samostatnost}</td>
                  <td>{row.socialni}</td>
                  <td>
                    <button onClick={() => remove(row.celeJmeno)}>
                      Odebrat
                    </button>
                  </td>
                </tr>
              );
            })}
          <tr>
            <td className="tdJmeno">
              <input
                value={celeJmeno}
                onChange={(e) => setCeleJmeno(e.target.value)}
                placeholder="Zadej celé jméno žáka"
                className="vlastnost-input-name"
              />
            </td>
            <td>
              <select
                className="vlastnost-input"
                value={pohlavi}
                onChange={(e) => setPohlavi(e.target.value)}
              >
                <option value="0">Muž</option>
                <option value="1">Žena</option>
              </select>
            </td>
            <td>
              <input
                type="number"
                min="1"
                max="5"
                value={bystrost}
                onChange={(e) => setBystrost(e.target.value)}
                className={`vlastnost-input-number ${
                  !isValidValue(bystrost) ? 'input-error' : ''
                }`}
              />
            </td>
            <td>
              <input
                type="number"
                min="1"
                max="5"
                value={samostatnost}
                onChange={(e) => setSamostatnost(e.target.value)}
                className={`vlastnost-input-number ${
                  !isValidValue(samostatnost) ? 'input-error' : ''
                }`}
              />
            </td>
            <td>
              <input
                type="number"
                min="1"
                max="5"
                value={socialni}
                onChange={(e) => setSocialni(e.target.value)}
                className={`vlastnost-input-number ${
                  !isValidValue(socialni) ? 'input-error' : ''
                }`}
              />
            </td>
            <td>
              <button onClick={handleAdd} disabled={!isFormValid}>
                Přidat
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

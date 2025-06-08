import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const ListDetail = () => {
  const params = useParams();
  const [list, setList] = useState(JSON.parse(localStorage.getItem('seznamZaku')) || []);

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
        <button onClick={removeClass}>Odebrat třídu</button>
      </div>
      <table className="students-table">
        <thead>
          <tr>
            <th className="thVlastnosti">Příjmení a jméno</th>
            <th className="thVlastnosti">Pohlaví</th>
            <th className="thVlastnosti">Bystrost</th>
            <th className="thVlastnosti">Samostatnost</th>
            <th className="thVlastnosti">Sociálnost</th>
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
            <td>
              <input
                value={celeJmeno}
                onChange={(e) => setCeleJmeno(e.target.value)}
                placeholder="Celé jméno"
              />
            </td>
            <td>
              <select
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
                className={!isValidValue(bystrost) ? 'input-error' : ''}
              />
            </td>
            <td>
              <input
                type="number"
                min="1"
                max="5"
                value={samostatnost}
                onChange={(e) => setSamostatnost(e.target.value)}
                className={!isValidValue(samostatnost) ? 'input-error' : ''}
              />
            </td>
            <td>
              <input
                type="number"
                min="1"
                max="5"
                value={socialni}
                onChange={(e) => setSocialni(e.target.value)}
                className={!isValidValue(socialni) ? 'input-error' : ''}
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

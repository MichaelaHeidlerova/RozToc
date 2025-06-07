import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const ListDetail = ({ data }) => {
  const params = useParams();
  const [list, setList] = useState(data);

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

    setList([...list, newEntry]);

    // Vyčištění formuláře
    setCeleJmeno('');
    setPohlavi('0');
    setBystrost('');
    setSamostatnost('');
    setSocialni('');
  };
  const save = () => {
    localStorage.setItem('seznamZaku', JSON.stringify(list));
  };
  const remove = (plneJmeno) => {
    setList(
      list.filter((row) => {
        return row.celeJmeno !== plneJmeno;
      }),
    );
  };
  return (
    <div className="list-detail">
      <div className="pageTitle">
        <h2>{params.id}</h2>
        <button onClick={save}>Uložit</button>
      </div>
      <table className="students-table">
        <thead>
          <tr>
            <th>Příjmení a jméno</th>
            <th>Pohlaví</th>
            <th>Bystrost</th>
            <th>Samostatnost</th>
            <th>Sociálnost</th>
            <th>Akce</th>
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
                  <td>{row.celeJmeno}</td>
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

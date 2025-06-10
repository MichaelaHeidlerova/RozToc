import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Tooltip from './Tooltip';
import trashIcon from './trash.jpg';

export const ListDetail = () => {
  const params = useParams();
  const [list, setList] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [editedValues, setEditedValues] = useState({});

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('seznamZaku')) || [];
    storedList.sort((a, b) => a.celeJmeno.localeCompare(b.celeJmeno));
    setList(storedList);
  }, []);

  const [celeJmeno, setCeleJmeno] = useState('');
  const [pohlavi, setPohlavi] = useState('0');
  const [bystrost, setBystrost] = useState('');
  const [samostatnost, setSamostatnost] = useState('');
  const [socialni, setSocialni] = useState('');

  const isValidValue = (val) => {
    const num = Number(val);
    return Number.isInteger(num) && num >= 1 && num <= 5;
  };

  const isFormValid =
    celeJmeno.trim() !== '' &&
    isValidValue(bystrost) &&
    isValidValue(samostatnost) &&
    isValidValue(socialni);

  const handleAdd = () => {
    if (!isFormValid) return;

    const newEntry = {
      celeJmeno,
      pohlavi: Number(pohlavi),
      bystrost: Number(bystrost),
      samostatnost: Number(samostatnost),
      socialni: Number(socialni),
      trida: params.id,
    };
    const novySeznam = [...list, newEntry];
    novySeznam.sort((a, b) => a.celeJmeno.localeCompare(b.celeJmeno));
    setList(novySeznam);

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
    if (window.confirm('Opravdu chceš odebrat žáka?') === false) {
      return;
    }
    const novySeznam = list.filter((row) => {
      return row.celeJmeno !== plneJmeno;
    });
    setList(novySeznam);
    save(novySeznam);
  };

  const handleEdit = (student) => {
    setEditingStudent(student.celeJmeno);
    setEditedValues({
      celeJmeno: student.celeJmeno,
      pohlavi: student.pohlavi,
      bystrost: student.bystrost,
      samostatnost: student.samostatnost,
      socialni: student.socialni,
    });
  };

  const handleSave = (student) => {
    const updatedList = list.map((item) => {
      if (item.celeJmeno === student.celeJmeno) {
        return {
          ...item,
          celeJmeno: editedValues.celeJmeno,
          pohlavi: Number(editedValues.pohlavi),
          bystrost: Number(editedValues.bystrost),
          samostatnost: Number(editedValues.samostatnost),
          socialni: Number(editedValues.socialni),
        };
      }
      return item;
    });
    setList(updatedList);
    save(updatedList);
    setEditingStudent(null);
    setEditedValues({});
  };

  const handleInputChange = (e, field) => {
    setEditedValues({
      ...editedValues,
      [field]: e.target.value,
    });
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
                    <br />5 - Slabý
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
                    <br />5 - Potřebuje neustálé vedení/nesamostatný
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
                    <br />5 - Konfliktní/nespolupracující
                  </>
                }
              >
                Soc. dovednosti
              </Tooltip>
            </th>
            <th className="thVlastnosti">Úprava/odebrání žáka</th>
          </tr>
        </thead>
        <tbody>
          {list
            ?.filter((row) => {
              return row.trida === params.id;
            })
            .map((row) => {
              const isEditing = editingStudent === row.celeJmeno;
              const vysledek = row.pohlavi === 0 ? 'Muž' : 'Žena';

              return (
                <tr key={row.celeJmeno}>
                  <td className="tdJmeno">
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedValues.celeJmeno || ''}
                        onChange={(e) => handleInputChange(e, 'celeJmeno')}
                        className="vlastnost-input-name" /* Použití stejné třídy */
                      />
                    ) : (
                      row.celeJmeno
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <select
                        value={editedValues.pohlavi || '0'}
                        onChange={(e) => handleInputChange(e, 'pohlavi')}
                        className="vlastnost-input"
                      >
                        <option value="0">Muž</option>
                        <option value="1">Žena</option>
                      </select>
                    ) : (
                      vysledek
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <input
                        type="number"
                        min="1"
                        max="5"
                        value={editedValues.bystrost || ''}
                        onChange={(e) => handleInputChange(e, 'bystrost')}
                        className={`vlastnost-input-number ${
                          !isValidValue(editedValues.bystrost)
                            ? 'input-error'
                            : ''
                        }`}
                      />
                    ) : (
                      row.bystrost
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <input
                        type="number"
                        min="1"
                        max="5"
                        value={editedValues.samostatnost || ''}
                        onChange={(e) => handleInputChange(e, 'samostatnost')}
                        className={`vlastnost-input-number ${
                          !isValidValue(editedValues.samostatnost)
                            ? 'input-error'
                            : ''
                        }`}
                      />
                    ) : (
                      row.samostatnost
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <input
                        type="number"
                        min="1"
                        max="5"
                        value={editedValues.socialni || ''}
                        onChange={(e) => handleInputChange(e, 'socialni')}
                        className={`vlastnost-input-number ${
                          !isValidValue(editedValues.socialni)
                            ? 'input-error'
                            : ''
                        }`}
                      />
                    ) : (
                      row.socialni
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <>
                        <button onClick={() => handleSave(row)}>Uložit</button>
                        <button
                          className="canceledBtn"
                          onClick={() => setEditingStudent(null)}
                        >
                          Zrušit
                        </button>
                      </>
                    ) : (
                      <div className="action-container">
                        <button onClick={() => handleEdit(row)}>Upravit</button>
                        <img
                          src={trashIcon}
                          alt="Odebrat žáka"
                          className="deleteStudent"
                          onClick={() => remove(row.celeJmeno)}
                        />
                      </div>
                    )}
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

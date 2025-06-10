import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ClassList = ({ data }) => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('seznamTrid')) ?? [],
  );
  const [novaTrida, setNovaTrida] = useState('');

  const handlePridejTridu = () => {
    const nazev = novaTrida.trim();

    if (nazev === '') return;
    if (list.some((trida) => trida.nazevTridy === nazev)) {
      alert('Třída už existuje!');
      return;
    }

    const nova = { nazevTridy: nazev };
    const novePole = [...list, nova];
    setList(novePole);
    setNovaTrida('');

    // Nepovinné: uložení do localStorage
    localStorage.setItem('seznamTrid', JSON.stringify(novePole));
  };

  return (
    <div>
      <div className="pageTitle">
        <h2>MOJE TŘÍDY/PŘIDEJ TŘÍDU</h2>
      </div>

      {list.length === 0 ? (
        <p className="emptyList">Nemáte uložené žádné třídy.</p>
      ) : (
        <div className="numberOfGroup">
          {list?.map((row) => (
            <Link to={`/class-detail/${row.nazevTridy}`} key={row.nazevTridy}>
              <div className="number">{row.nazevTridy}</div>
            </Link>
          ))}
        </div>
      )}

      {/* Formulář pro přidání nové třídy */}
      <div className="add-class-form">
        <input className='inputClass'
          type="text"
          placeholder="Zadej název třídy (např. 5.B)"
          value={novaTrida}
          onChange={(e) => setNovaTrida(e.target.value)}
        />
        <br />
        <button onClick={handlePridejTridu}>Přidat třídu</button>
      </div>
    </div>
  );
};

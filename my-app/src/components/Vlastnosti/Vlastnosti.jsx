import './vlastnosti.css';
import React, { useEffect, useState } from 'react';

export const Vlastnosti = ({ }) => {
  const [typSkupin, setTypSkupin] = useState();
  const [vybraneVlastnosti, setVybraneVlastnosti] = useState({});
  const [pocetSkupin, setPocetSkupin] = useState('');
  const [pocetZaku, setPocetZaku] = useState('');

  const handleVlastnostChange = (event) => {
    const { name, checked } = event.target;
    setVybraneVlastnosti(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handlePocetSkupinChange = (event) => {
    setPocetSkupin(event.target.value);
  };

  const handlePocetZakuChange = (event) => {
    setPocetZaku(event.target.value);
  };

const handleVytvorSkupiny = () => {
  const dataProSkupiny = {
    vybraneVlastnosti: vybraneVlastnosti,
    typSkupin: typSkupin,
    pocetSkupin: typSkupin === "pocetSkupin" ? pocetSkupin : null,
    pocetZaku: typSkupin === "pocetZaku" ? pocetZaku : null,
  };

  console.log("Data pro skupiny:", dataProSkupiny);

  if (typSkupin === "pocetSkupin") {
    console.log(`Vytvářím ${pocetSkupin} skupin.`);
  } else if (typSkupin === "pocetZaku") {
    console.log(`Vytvářím skupiny po ${pocetZaku} žácích.`);
  } else {
    console.log("Nevybrán typ skupiny.");
  }
};

  useEffect(() => { console.log("Vybrané vlastnosti:", vybraneVlastnosti); }, 
  [vybraneVlastnosti]);

    useEffect(() => {
    console.log("Počet skupin:", pocetSkupin);
  }, [pocetSkupin]);

  useEffect(() => {
    console.log("Počet žáků:", pocetZaku);
  }, [pocetZaku]);

  return (
    <div>
      <div className='pageTitle'>
        <h2>ZOHLEDNĚNÍ VLASTNOSTÍ</h2>
      </div>
      <div className="howManyGroups">
        <div>
          <input
            type="checkbox"
            id="pohlaví"
            name="pohlaví"
            checked={vybraneVlastnosti['pohlaví'] || false}
            onChange={handleVlastnostChange}
          />
          <label for="scales">POHLAVÍ</label>
          <input
            type="checkbox"
            id="samostatnáPráce"
            name="samostatnáPráce"
            checked={vybraneVlastnosti['samostatnáPráce'] || false}
            onChange={handleVlastnostChange}
          />
          <label for="horns">SCHOPNOST SAMOSTATNÉ PRÁCE</label>
          
        </div>
        <div>
          <input
            type="checkbox"
            id="bystrost"
            name="bystrost"
            checked={vybraneVlastnosti['bystrost'] || false}
            onChange={handleVlastnostChange}
          />
          <label for="scales">BYSTROST/NADÁNÍ</label>
          <input
            type="checkbox"
            id="sociálníDovednosti"
            name="sociálníDovednosti"
            checked={vybraneVlastnosti['sociálníDovednosti'] || false}
            onChange={handleVlastnostChange}
          />
          <label for="horns">SOCIÁLNÍ DOVEDNOSTI</label>
        </div>
      </div>
      <div className="selectFormation">
        <div className="numberOfStudents">
          <button onClick={() => {
            setTypSkupin("pocetSkupin");
            setPocetZaku('');
          }}>Vytvořit daný počet skupin</button>
        </div>
        <div className="numberOfStudents">
          <button onClick={() => {
            setTypSkupin("pocetZaku");
            setPocetSkupin('');
          }}>Vytvořit skupiny po x žácích</button>
        </div>
    </div>
        <div>
          {typSkupin === "pocetSkupin" && (
            <div className="numberOfGroups">
              <label htmlFor="numberOfGroups">Zadejte počet skupin:</label>
              <input
                type="number"
                id="numberOfGroups"
                name="numberOfGroups"
                min="1"
                max="10"
                value={pocetSkupin}
                onChange={handlePocetSkupinChange}
              />
            </div>
          )}
          {typSkupin === "pocetZaku" && (
            <div className="numberOfStudents">
              <label htmlFor="numberOfStudents">Zadejte počet žáků ve skupině:</label>
              <input
                type="number"
                id="numberOfStudents"
                name="numberOfStudents"
                min="1"
                max="30"
                value={pocetZaku}
                onChange={handlePocetZakuChange}
              />
            </div>
          )}
        </div>
        <div>
          <button className="mixedGroups" onClick={handleVytvorSkupiny}>
            Vytvořit skupiny
          </button>
        </div>
    </div>
  );
};

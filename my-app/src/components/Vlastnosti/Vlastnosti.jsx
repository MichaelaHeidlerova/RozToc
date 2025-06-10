import { rozdelDoSkupin } from '../../pages/Groups/rozdelDoSkupin';
import './Vlastnosti.css';
import React, { useEffect, useState } from 'react';

export const Vlastnosti = ({ zaciVeSkupine, setVysledek, setStep }) => {
  const [typSkupin, setTypSkupin] = useState();
  const [vybraneVlastnosti, setVybraneVlastnosti] = useState({});
  const [pocetSkupin, setPocetSkupin] = useState('');
  const [pocetZaku, setPocetZaku] = useState('');

  const handleVlastnostChange = (event) => {
    const { name, checked } = event.target;
    setVybraneVlastnosti((prevState) => ({
      ...prevState,
      [name]: checked,
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
      pocetSkupin: typSkupin === 'pocetSkupin' ? pocetSkupin : null,
      pocetZaku: typSkupin === 'pocetZaku' ? pocetZaku : null,
    };

const vysledek = rozdelDoSkupin( zaciVeSkupine, vybraneVlastnosti, typSkupin, typSkupin === 'pocetSkupin' ? pocetSkupin : pocetZaku);

setVysledek(vysledek);
setStep('vysledek');

    if (typSkupin === 'pocetSkupin') {
    } else if (typSkupin === 'pocetZaku') {
    } else {
    }
  };

  useEffect(() => {
  }, [vybraneVlastnosti]);

  useEffect(() => {
  }, [pocetSkupin]);

  useEffect(() => {
  }, [pocetZaku]);

  return (
    <div>
        <div className="pageTitle">
          <h2>ZOHLEDNI VLASTNOSTI</h2>
        </div>

      <div className="pageContent">
        <div className="howManyGroups">
          <div>
            <input
              type="checkbox"
              id="pohlavi"
              name="pohlavi"
              checked={vybraneVlastnosti['pohlavi'] || false}
              onChange={handleVlastnostChange}
            />
            <label>POHLAVÍ</label>
            <input
              type="checkbox"
              id="samostatnost"
              name="samostatnost"
              checked={vybraneVlastnosti['samostatnost'] || false}
              onChange={handleVlastnostChange}
            />
            <label>SCHOPNOST SAMOSTATNÉ PRÁCE</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="bystrost"
              name="bystrost"
              checked={vybraneVlastnosti['bystrost'] || false}
              onChange={handleVlastnostChange}
            />
            <label>BYSTROST/NADÁNÍ</label>
            <input
              type="checkbox"
              id="socialni"
              name="socialni"
              checked={vybraneVlastnosti['socialni'] || false}
              onChange={handleVlastnostChange}
            />
            <label>SOCIÁLNÍ DOVEDNOSTI</label>
          </div>
        </div>
        <div className="selectFormation">
          <div>
            <button className="drawersBtn"
              onClick={() => {
                setTypSkupin('pocetSkupin');
                setPocetZaku('');
              }}
            >
              Vytvořit daný počet skupin
            </button>
          </div>
          <div>
            <button className="drawersBtn"
              onClick={() => {
                setTypSkupin('pocetZaku');
                setPocetSkupin('');
              }}
            >
              Vytvořit skupiny po x žácích
            </button>
          </div>
        </div>
        <div>
          {typSkupin === 'pocetSkupin' && (
            <div className="numberOfGroups">
              <label htmlFor="numberOfGroups"><p>Zadejte počet skupin: </p></label>
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
          {typSkupin === 'pocetZaku' && (
            <div className="numberOfStudents">
              <label htmlFor="numberOfStudents">
                <p>Zadejte počet žáků ve skupině: </p>
              </label>
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
        <div className="add-class-form">
          <button className="mixedGroups" onClick={handleVytvorSkupiny}>
            Vytvořit skupiny
          </button>
        </div>
      </div>
    </div>
  );
};

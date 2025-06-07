import './vlastnosti.css';
import React, { useState } from 'react';

export const Vlastnosti = ({ }) => {
  const [typSkupin, setTypSkupin] = useState();





  return (
    <div>
      <div className='pageTitle'>
        <h2>ZOHLEDNĚNÍ VLASTNOSTÍ</h2>
      </div>
      <div className="howManyGroups">
        <div>
          <input type="checkbox" id="pohlaví" name="pohlaví" checked />
          <label for="scales">POHLAVÍ</label>
          <input type="checkbox" id="samostatnáPráce" name="samostatnáPráce" />
          <label for="horns">SCHOPNOST SAMOSTATNÉ PRÁCE</label>
          
        </div>
        <div>
          <input type="checkbox" id="bystrost" name="bystrost" checked />
          <label for="scales">BYSTROST/NADÁNÍ</label>
          <input type="checkbox" id="sociálníDovednosti" name="sociálníDovednosti" />
          <label for="horns">SOCIÁLNÍ DOVEDNOSTI</label>
        </div>
      </div>
      <div className="selectFormation">
        <div className="numberOfStudents">
          <button onClick={() => setTypSkupin("pocetSkupin")}>Vytvořit daný počet skupin</button>
        </div>
        <div className="numberOfStudents">
          <button onClick={() => setTypSkupin("pocetZaku")}>Vytvořit skupiny po x žácích</button>
        </div>
    </div>
        <div>
          {typSkupin === "pocetSkupin" && (
            <div className="numberOfGroups">
              <label htmlFor="numberOfGroups">Zadejte počet skupin:</label>
              <input type="number" id="numberOfGroups" name="numberOfGroups" min="1" max="10" />
            </div>
          )}
          {typSkupin === "pocetZaku" && (
            <div className="numberOfStudents">
              <label htmlFor="numberOfStudents">Zadejte počet žáků ve skupině:</label>
              <input type="number" id="numberOfStudents" name="numberOfStudents" min="1" max="30" />
            </div>
          )}
        </div>
    </div>
  );
};

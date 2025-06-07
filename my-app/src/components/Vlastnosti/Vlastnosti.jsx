import './vlastnosti.css';

export const Vlastnosti = ({ }) => {
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
          <button>Vytvořit daný počet skupin</button>
        </div>
        <div className="numberOfStudents">
          <button>Vytvořit skupiny po x žácích</button>
        </div>
    </div>
    </div>
  );
};

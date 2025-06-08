import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ClassList = ({ data }) => {
  const [list, setList] = useState(data);

  return (
    <div>
    <div className="pageTitle">
          <h2>MOJE TŘÍDY</h2>
    </div>
    <div className="numberOfGroup">
      {/* Pro každou třídu vykresli jeden čtvereček */}
      
      {list?.map((row) => (
        <Link to={`/class-detail/${row.nazevTridy}`}>
        <div key={row.nazevTridy} className="number">
          {row.nazevTridy}
        </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

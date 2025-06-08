import { Link } from 'react-router-dom';

export const VytvoreniSkupin = () => {
  const volaniSkupin = JSON.parse(localStorage.getItem('seznamTrid')) || [];

  return (
    <div>
      <div className="pageTitle">
        <h2>VYBER TŘÍDU</h2>
      </div>
      <div className="numberOfGroup">
        {volaniSkupin?.map((row) => (
          <Link to={`/groups/${row.nazevTridy}`} key={row.nazevTridy}>
            <div className="number">{row.nazevTridy}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};


export const VytvoreniSkupin = ({ setStep, aktivniTridaHandler }) => {
  const volaniSkupin = JSON.parse(localStorage.getItem('seznamTrid')) || [];

  return (
      <div>
        <div className="pageTitle">
          <h2>VYBER TŘÍDU</h2>
        </div>
        <div className="numberOfGroup">
        {volaniSkupin?.map((row) => (
        <button key={row.nazevTridy} className="number" onClick={() => aktivniTridaHandler(row.nazevTridy)}>
          {row.nazevTridy}
        </button>
      ))}
      </div>
        <button onClick={() => setStep("nepritomnost")}>Pokračovat na nepřítomnost</button>
      </div>
    );
};

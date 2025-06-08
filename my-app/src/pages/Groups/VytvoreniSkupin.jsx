
export const VytvoreniSkupin = ({ setStep}) => {
  const volaniSkupin = JSON.parse(localStorage.getItem('seznamTrid')) || [];

  return (
      <div>
        <div className="pageTitle">
          <h2>VYBER TŘÍDU</h2>
        </div>
        <div className="numberOfGroup">
        {volaniSkupin?.map((row) => (
        <div key={row.nazevTridy} className="number">
          {row.nazevTridy}
        </div>
      ))}
      </div>
        <button onClick={() => setStep("nepritomnost")}>Pokračovat na nepřítomnost</button>
      </div>
    );
};

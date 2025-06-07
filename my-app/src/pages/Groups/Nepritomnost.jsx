export const Nepritomnost = ({ setStep }) => {
  return (
      <div>
        <h2>Neprítomnost</h2>
        <p>Zde bude správa nepřítomností studentů.</p>
        <button onClick={() => setStep("vlastnosti")}>Pokračovat na vlastnosti</button>
      </div>
    );
}

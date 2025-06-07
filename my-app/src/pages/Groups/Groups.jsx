import { Vlastnosti } from "../../components/Vlastnosti/Vlastnosti";
import React, { useState } from "react";
import { Nepritomnost } from "./Nepritomnost";

export const Groups = () => {
  const [step, setStep] = useState("vytvoreniSkupin");

  if (step === "vytvoreniSkupin") {
    return (
      <div>
        <h2>Vytvoření skupin</h2>
        <p>Zde bude správa vytváření skupin.</p>
        <button onClick={() => setStep("nepritomnost")}>Pokračovat na nepřítomnost</button>
      </div>
    );
    
  } else if (step === "nepritomnost") {
    return (
      <Nepritomnost 
        setStep={setStep}
      />
    );
  } else if (step === "vlastnosti") {
    return (
      <Vlastnosti />
    );
  };
};

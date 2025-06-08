import { Vlastnosti } from "../../components/Vlastnosti/Vlastnosti";
import React, { useState } from "react";
import { Nepritomnost } from "./Nepritomnost";
import { VytvoreniSkupin } from "./VytvoreniSkupin";

export const Groups = () => {
  const [step, setStep] = useState("vytvoreniSkupin");

  if (step === "vytvoreniSkupin") {
    return (
      <VytvoreniSkupin
        setStep={setStep} />
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

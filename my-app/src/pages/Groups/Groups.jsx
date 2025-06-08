import { Vlastnosti } from "../../components/Vlastnosti/Vlastnosti";
import React, { useState } from "react";
import { Nepritomnost } from "./Nepritomnost";
import { VytvoreniSkupin } from "./VytvoreniSkupin";

export const Groups = () => {
  const [step, setStep] = useState("vytvoreniSkupin");
  const [aktivniTrida, setAktivniTrida] = useState("vytvoreniSkupin");

  const aktivniTridaHandler = ( vybranaTrida ) => { 
    setAktivniTrida(vybranaTrida);
    setStep("nepritomnost");
  }

  if (aktivniTrida === "vytvoreniSkupin") {
    return (
      <VytvoreniSkupin
        setStep={setStep}
        aktivniTridaHandler={aktivniTridaHandler} />
    );
    
  } else if (step === "nepritomnost") {
    return (
      <Nepritomnost 
        setStep={setStep}
        aktivniTrida={aktivniTrida}
      />
    );
  } else if (step === "vlastnosti") {
    return (
      <Vlastnosti />
    );
  };
};

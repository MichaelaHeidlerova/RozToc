import { Vlastnosti } from "../../components/Vlastnosti/Vlastnosti";
import { useState } from "react";
import { Nepritomnost } from "./Nepritomnost";
import { useParams } from "react-router-dom";
import { Vysledek } from "./Vysledek"

export const Groups = () => {
  const [step, setStep] = useState("nepritomnost");
  const [zaciVeSkupine, setZaciVeSkupine] = useState([]);
  const [vysledek, setVysledek] = useState()

const vypocitejVysledek = () => {
  console.log("Vypočítávám výsledek...");
}

  const params = useParams();

if (step === "nepritomnost") {
    return (
      <Nepritomnost 
        setStep={setStep}
        aktivniTrida={params.id}
        zaciVeSkupine={zaciVeSkupine}
        setZaciVeSkupine={setZaciVeSkupine}
      />
    );
  } else if (step === "vlastnosti") {
    return (
      <Vlastnosti 
        zaciVeSkupine={zaciVeSkupine}
        setStep={setStep}
        setVysledek={setVysledek}
      />
    );
  } else if (step === "vysledek") {
    return (
      <Vysledek
        vysledek={vysledek}
      />
    );
  };
};

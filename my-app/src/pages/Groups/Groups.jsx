import { Vlastnosti } from "../../components/Vlastnosti/Vlastnosti";
import { useState } from "react";
import { Nepritomnost } from "./Nepritomnost";
import { useParams } from "react-router-dom";

export const Groups = () => {
  const [step, setStep] = useState("nepritomnost");
  const [pritomniZaci, setPritomniZaci] = useState({});

  const params = useParams();

if (step === "nepritomnost") {
    return (
      <Nepritomnost 
        setStep={setStep}
        aktivniTrida={params.id}
        pritomniZaci={pritomniZaci}
        setPritomniZaci={setPritomniZaci}
      />
    );
  } else if (step === "vlastnosti") {
    return (
      <Vlastnosti />
    );
  };
};

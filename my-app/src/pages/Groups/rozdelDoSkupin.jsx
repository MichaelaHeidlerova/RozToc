export const rozdelDoSkupin = (students, vlastnosti, typRozdeleni, hodnota) => {
  const pocetZaku = students.length;

  // 1. Urči počet skupin
  let pocetSkupin = typRozdeleni === 'pocetSkupin'
    ? hodnota
    : Math.ceil(pocetZaku / hodnota);

  // Ošetření případu, kdy je počet skupin 0 nebo NaN
  if (!pocetSkupin || pocetSkupin <= 0) {
    console.warn("Počet skupin je neplatný. Vracím prázdné pole.");
    return []; // Nebo jiná vhodná hodnota, např. [students] pro jednu skupinu se všemi žáky
  }

  // 2. Připrav skóre pro každého žáka podle zapnutých vlastností
  const hodnoceni = students.map((zak) => {
    let skore = 0;
    if (vlastnosti.bystrost) skore += zak.bystrost;
    if (vlastnosti.samostatnost) skore += zak.samostatnost;
    if (vlastnosti.socialni) skore += zak.socialni;
    return { ...zak, skore };
  });

  // 3. Odděl žáky podle pohlaví, pokud je pohlaví aktivní
  let muzi = [], zeny = [];
  if (vlastnosti.pohlavi) {
    muzi = hodnoceni.filter((z) => z.pohlavi === 0).sort((a, b) => b.skore - a.skore);
    zeny = hodnoceni.filter((z) => z.pohlavi === 1).sort((a, b) => b.skore - a.skore);
  } else {
    // Pokud pohlaví neřešíme, pracuj se všemi žáky dohromady
    muzi = [...hodnoceni].sort((a, b) => b.skore - a.skore);
  }

  // 4. Inicializuj prázdné skupiny
  const skupiny = Array.from({ length: pocetSkupin }, () => []);

  // 5. Rozdělování žáků hadovitě s vyvažováním pohlaví
  const rozdelHadovite = (poleZaku) => {
    let smer = 1;
    let index = 0;
    for (const zak of poleZaku) {
      // Ošetření indexu mimo rozsah
      if (index >= 0 && index < skupiny.length) {
        skupiny[index].push(zak);
      } else {
        console.warn(`Index ${index} je mimo rozsah pole skupiny.`);
      }

      index += smer;
      if (index === pocetSkupin) {
        index = pocetSkupin - 1;
        smer = -1;
      } else if (index === -1) {
        index = 0;
        smer = 1;
      }
    }
  };

  // 6. Rozdělení podle pohlaví nebo bez ohledu na něj
  if (vlastnosti.pohlavi) {
    // Reset indexu před každým voláním rozdelHadovite
    let muziIndex = 0;
    let zenyIndex = 0;
    const rozdelMuzi = () => {
      let smer = 1;
      let index = 0;
      for (const zak of muzi) {
        // Ošetření indexu mimo rozsah
        if (index >= 0 && index < skupiny.length) {
          skupiny[index].push(zak);
        } else {
          console.warn(`Index ${index} je mimo rozsah pole skupiny.`);
        }
  
        index += smer;
        if (index === pocetSkupin) {
          index = pocetSkupin - 1;
          smer = -1;
        } else if (index === -1) {
          index = 0;
          smer = 1;
        }
      }
    };
    const rozdelZeny = () => {
      let smer = 1;
      let index = 0;
      for (const zak of zeny) {
        // Ošetření indexu mimo rozsah
        if (index >= 0 && index < skupiny.length) {
          skupiny[index].push(zak);
        } else {
          console.warn(`Index ${index} je mimo rozsah pole skupiny.`);
        }
  
        index += smer;
        if (index === pocetSkupin) {
          index = pocetSkupin - 1;
          smer = -1;
        } else if (index === -1) {
          index = 0;
          smer = 1;
        }
      }
    };
    rozdelMuzi();
    rozdelZeny();
  } else {
    rozdelHadovite(muzi); // zde jsou všichni žáci
  }

  return skupiny;
};

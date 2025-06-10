const zamichatPole = (pole) => {
    for (let i = pole.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pole[i], pole[j]] = [pole[j], pole[i]];
    }
    return pole;
  };

export const rozdelDoSkupin = (nezamichaniStudents, vlastnosti, typRozdeleni, hodnota) => {
  const pocetZaku = nezamichaniStudents.length;

  const students = zamichatPole(nezamichaniStudents);

  let pocetSkupin = typRozdeleni === 'pocetSkupin'
    ? Number(hodnota)
    : Math.ceil(pocetZaku / Number(hodnota));

  if (!pocetSkupin || pocetSkupin <= 0) {
    console.warn("Počet skupin je neplatný. Vracím prázdné pole.");
    return [];
  }

  const hodnoceni = students.map((zak) => {
    let skore = 0;
    if (vlastnosti.bystrost) skore += zak.bystrost;
    if (vlastnosti.samostatnost) skore += zak.samostatnost;
    if (vlastnosti.socialni) skore += zak.socialni;
    return { ...zak, skore };
  });

  let muzi = [], zeny = [];
  if (vlastnosti.pohlavi) {
    muzi = hodnoceni.filter((z) => z.pohlavi === 0).sort((a, b) => b.skore - a.skore);
    zeny = hodnoceni.filter((z) => z.pohlavi === 1).sort((a, b) => b.skore - a.skore);
  } else {
    muzi = [...hodnoceni].sort((a, b) => b.skore - a.skore);
  }

  const skupiny = Array.from({ length: pocetSkupin }, () => []);

  const rozdelHadovite = (poleZaku) => {
    let smer = 1;
    let index = 0;
    for (const zak of poleZaku) {
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

  if (vlastnosti.pohlavi) {
    let muziIndex = 0;
    let zenyIndex = 0;
    const rozdelMuzi = () => {
      let smer = 1;
      let index = 0;
      for (const zak of muzi) {
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
    rozdelHadovite(muzi);
  }

  return skupiny;
};

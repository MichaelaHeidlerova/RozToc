export const Instruction = () => {
  return (
    <section className="guide">
      <div className="pageTitle">
        <h2>NÁVOD: Jak spravovat třídy a tvořit skupiny?</h2>
      </div>

      <div className="pageContent">
        <p className="guide-paragraph">
          Vítejte v nástroji pro správu tříd a žáků a především efektivní tvorbu týmů pro skupinovou práci!<br />
          Následující kroky Vás provedou klíčovými funkcemi:
        </p>

        <div className="guide-Content">
          <h3 className="guide-subheading">1. SPRÁVA TŘÍD: Založení třídy a přidání žáků</h3>
          <p className="guide-paragraph">
            <strong>Založení třídy:</strong> Klikněte na tlačítko
            "Správa tříd". Do příkazového řádku zadejte název třídy (např. 7. A) a klikněte na "Přidat třídu".
          </p>
          <p className="guide-paragraph">
            <strong>Přidání žáků:</strong> V přehledu tříd vyberte nově
            vytvořenou třídu. Do příkazového řádku zadejte celé jméno žáka, vyberte jeho pohlaví a
            volitelně doplňte jeho vlastnosti známkou 1-5 jako ve škole:
          </p>
          <ul className="guide-list">
            <li>Pohlaví</li>
            <li>Nadání/bystrost</li>
            <li>Schopnost samostatné práce</li>
            <li>Sociální dovednosti</li>
          </ul>
          <p className="guide-paragraph">
            Klikněte na tlačítko "Přidat" a žák se objeví v přehledu třídy. Tento postup opakujte pro každého žáka, kterého chcete přidat do třídy. Seznam žáků ve třídě se AUTOMATICKY ukládá!
          </p>
        </div>

        <div className="guide-section">
          <h3 className="guide-subheading">2. TVORBA SKUPIN</h3>
          <p className="guide-paragraph">
            V Tvorbě skupin nejdříve vyberte požadovanou třídu. Dále označte přítomné žáky (POZOR - automaticky se všichni onačují jako přítomní, tudíž odškrnete jen ty, co v daný moment chybí). V dalším kroku pak vyberte dle čeho chcete dané skupiny tvořit.
          </p>
          <p className="guide-paragraph">
            Zohlednění vlastností žáků při tvorbě skupin:
          </p>
          <ul className="guide-list">
            <li>
              <strong>ZCELA NÁHODNĚ:</strong> Když žádnou vlastnost nezaškrtnete, systém rozdělí žáky bez ohledu na
              jejich vlastnosti.
            </li>
            <li>
              <strong>S OHLEDEM NA VLASTNOSTI:</strong> Systém se pokusí
              rozložit žáky s různými vlastnostmi rovnoměrně do skupin (např.
              aby v každé skupině byl někdo nadaný, někdo s dobrými sociálními
              dovednostmi atd.).
            </li>
          </ul>
          <p className="guide-paragraph">
              Máte dvě možnosti, jak tvořit skupiny:
          </p>
          <ul className="guide-list">
            <li>
              <strong>VYTVOŘIT DANÝ POČET SKUPIN:</strong> Zadejte požadovaný
              počet skupin (např. 5 skupin) a systém žáky rozdělí.
            </li>
            <li>
              <strong>VYTVOŘIT SKUPINY PO X ŽÁCÍCH:</strong> Zadejte, kolik minimálně žáků
              má být v jedné skupině (např. 3 žáci ve skupině).
            </li>
          </ul>
        </div>

        <div className="guide-section">
          <h3 className="guide-subheading">
            3. ČASOMÍRA: Odpočet času pro skupinovou práci
          </h3>
          <p className="guide-paragraph">
            Zadejte, kolik času mají žáci na splnění úkolu, a spusťte odpočet. Žáci tak budou mít
            jasnou představu o tom, kolik času jim na práci ještě zbývá.
          </p>
        </div>

        <p className="guide-conclusion">
          Věříme, že Vám tento nástroj usnadní práci se žáky a organizaci
          skupinových aktivit! Pokud budete mít jakékoli dotazy a nebo nápady/postřehy, jak naši aplikaci ještě vylepšit neváhejte se na nás obrátit :)
        </p>
      </div>
    </section>
  );
};

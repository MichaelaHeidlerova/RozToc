export const Instruction = () => {
  return (
    <section class="guide">
      <div className="pageTitle">
          <h2>NÁVOD PRO UČITELE: Jak spravovat třídy a tvořit skupiny?</h2>
        </div>

<div class="pageContent">
  <p class="guide-paragraph">
    Vítejte v nástroji pro efektivní správu žáků a tvorbu skupin! Následující kroky vás provedou klíčovými funkcemi.
  </p>
    
  <div class="guide-Content">
    <h3 class="guide-subheading">1. Založení třídy a přidání žáků</h3>
    <p class="guide-paragraph"><strong>Založení třídy:</strong> Po přihlášení klikněte na tlačítko "Nová třída". Zadejte název třídy (např. 7.A) a uložte.</p>
    <p class="guide-paragraph"><strong>Přidání žáků:</strong> V přehledu tříd vyberte nově vytvořenou třídu a klikněte na "Přidat žáka". Zadejte jméno žáka a volitelně doplňte jeho vlastnosti:</p>
    <ul class="guide-list">
      <li>Pohlaví</li>
      <li>Nadání/bystrost</li>
      <li>Schopnost samostatné práce</li>
      <li>Sociální dovednosti</li>
    </ul>
  </div>

  <div class="guide-section">
    <h3 class="guide-subheading">2. Správa docházky</h3>
    <p class="guide-paragraph">
      V přehledu žáků ve třídě můžete snadno zaškrtnout přítomnost či nepřítomnost žáků pro daný den. Nepřítomní žáci nebudou zařazeni do skupin.
    </p>
  </div>

  <div class="guide-section">
    <h3 class="guide-subheading">3. Tvorba skupin</h3>
    <p class="guide-paragraph">Máte dvě možnosti, jak tvořit skupiny:</p>
    <ul class="guide-list">
      <li><strong>Vytvořit daný počet skupin:</strong> Zadejte požadovaný počet skupin (např. 5 skupin) a systém žáky rozdělí.</li>
      <li><strong>Vytvořit skupiny po X žácích:</strong> Zadejte, kolik žáků má být v každé skupině (např. 3 žáci na skupinu).</li>
    </ul>
    <p class="guide-paragraph">Zohlednění vlastností žáků při tvorbě skupin:</p>
    <ul class="guide-list">
      <li><strong>Zcela náhodně:</strong> Systém rozdělí žáky bez ohledu na jejich vlastnosti.</li>
      <li><strong>S ohledem na vlastnosti:</strong> Systém se pokusí rozložit žáky s různými vlastnostmi rovnoměrně do skupin (např. aby v každé skupině byl někdo nadaný, někdo s dobrými sociálními dovednostmi atd.).</li>
    </ul>
  </div>

  <div class="guide-section">
    <h3 class="guide-subheading">4. Přidělení rolí ve skupině</h3>
    <p class="guide-paragraph">Po vytvoření skupin můžete každému žákovi v rámci jeho skupiny přiřadit specifické role:</p>
    <ul class="guide-list">
      <li>Kapitán</li>
      <li>Zapisovatel</li>
      <li>Prezentátor</li>
      <li>Přípravář</li>
      <li>Časoměřič</li>
      <li>Kontrolor</li>
    </ul>
  </div>

  <div class="guide-section">
    <h3 class="guide-subheading">5. Odpočet času pro skupinovou práci</h3>
    <p class="guide-paragraph">
      Pro usnadnění skupinové práce můžete zapnout odpočet času. Zadejte, kolik času mají žáci na úkol, a spusťte odpočet. Žáci tak budou mít jasnou představu o zbývajícím čase.
    </p>
  </div>

  <p class="guide-conclusion">
    Věříme, že vám tento nástroj usnadní práci se žáky a organizaci skupinových aktivit! Pokud budete mít jakékoli dotazy, neváhejte se na nás obrátit.
  </p>

</div>
</section>
  );
};

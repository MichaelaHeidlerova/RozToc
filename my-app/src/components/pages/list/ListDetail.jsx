export const ListDetail = ({ data }) => {
  return (
    <div className="list-detail">
      <table class="students-table">
        <thead>
          <tr>
            <th>Příjmení a jméno</th>
            <th>Pohlaví</th>
            <th>Bystrost</th>
            <th>Samostatnost</th>
            <th>Sociálnost</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => {
            const vysledek = row.pohlavi === 0 ? 'Muž' : 'Žena';
            const celeJmeno = `${row.prijmeni} ${row.jmeno}`;
            return (
              <tr key={celeJmeno}>
                <td>{celeJmeno}</td>
                <td>{vysledek}</td>
                <td>{row.bystrost}</td>
                <td>{row.samostatnost}</td>
                <td>{row.socialni}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

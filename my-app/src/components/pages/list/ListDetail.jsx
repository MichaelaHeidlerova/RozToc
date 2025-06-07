import { useState } from "react";

export const ListDetail = ({ data }) => {
  const [list, setList] = useState(data);
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
          {list?.map((row) => {
            const vysledek = row.pohlavi === 0 ? 'Muž' : 'Žena';
            
            return (
              <tr key={row.celeJmeno}>
                <td>{row.celeJmeno}</td>
                <td>{vysledek}</td>
                <td>{row.bystrost}</td>
                <td>{row.samostatnost}</td>
                <td>{row.socialni}</td>
              </tr>
            );
          })}
          <tr>
            <td>
              <input></input>
            </td>
            <td>
              <select>
                <option value="0">Muž</option>
                <option value="1">Žena</option>
              </select>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <button>Přidat</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

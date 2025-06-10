import { seznam } from "../seznam";
import { seznamTrid } from "../seznamTrid";

export const Footer = () => {
  const loadData = () => {
    localStorage.setItem("seznamZaku",JSON.stringify(seznam));
    localStorage.setItem("seznamTrid",JSON.stringify(seznamTrid))
  }
  return (
    <footer>
      <p>© 2025 Gabriela & Michaela, Czechitas Digital Academy, Prague</p>
    </footer>
  );
};

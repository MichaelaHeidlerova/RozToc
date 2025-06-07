import { Form } from './Form/Form';
import { Vlastnosti } from './Vlastnosti/Vlastnosti';
import { Menu } from './Menu';
import { Content } from './Content';

export const Main = () => {
  const today = new Date().toLocaleDateString('cs-CZ', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="layout-wrapper">
      <div className="teachersDesk">
        <div className="date-display">
          <h2>Dnes je:</h2>
          <p>{today}</p>
        </div>
        <div className="desk2"></div>
      </div>

      <div className="main-container">
        <Menu></Menu>


        <Content>
        <div className="board">
          <Vlastnosti />
          </div>
  
        </Content>
      </div>
      </div>

  );
};

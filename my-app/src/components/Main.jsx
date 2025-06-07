import { Menu } from './Menu';
import { Content } from './Content';

export const Main = () => {
  return (
    <div className="layout-wrapper">
      <div className="teachersDesk">
        <div className="date-display">
          <h2>Dnes je:</h2>
        </div>
        <div className="desk2"></div>
      </div>

      <div className="main-container">
        <Menu></Menu>

        <Content></Content>
      </div>
    </div>
  );
};

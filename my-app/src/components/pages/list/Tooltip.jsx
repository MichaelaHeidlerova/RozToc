import React from 'react';
import './Tooltip.css';

const Tooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="tooltip">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;


import React, { useState } from 'react';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </div>
      <div className="accordion-body">
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
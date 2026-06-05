import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageButtons = () => {
    const buttons = [];
    
    for (let i = 1; i <= Math.min(totalPages, 3); i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      );
    }
    
    if (totalPages > 3) {
      buttons.push(
        <span key="dots" className="pagination-dots">…</span>
      );
      buttons.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`pagination-btn ${currentPage === totalPages ? 'active' : ''}`}
        >
          {totalPages}
        </button>
      );
    }
    
    return buttons;
  };

  return (
    <div className="container-1440 pagination-wrapper">
      <div className="pagination">
        <button 
          onClick={() => onPageChange(currentPage - 1)} 
          className="pagination-arrow"
          disabled={currentPage === 1}
        >
          ‹
        </button>
        {renderPageButtons()}
        <button 
          onClick={() => onPageChange(currentPage + 1)} 
          className="pagination-arrow"
          disabled={currentPage === totalPages}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Pagination;
import React from 'react';

const Header = ({ isDarkTheme, toggleTheme, onSearch, onFilterOpen }) => {
  return (
    <header className="header">
      <div className="container-1440">
        <div className="header-content">
          <button onClick={toggleTheme} className="theme-btn">
            <img 
              /* Убрали слэш перед img/ */
              src={isDarkTheme ? "img/light_btn.png" : "img/dark_btn.png"} 
              alt="Переключить тему" 
              className="theme-icon-img"
            />
          </button>

          <div className="search-wrapper">
            <div className="search-input-wrapper">
              <input 
                type="text" 
                placeholder="Painting title" 
                className="search-input"
                onChange={(e) => onSearch(e.target.value)}
              />
              <div className="search-icon">
                {/* Убрали слэш перед img/ */}
                <img src="img/icon-1.png" alt="search" />
              </div>
            </div>

            <button onClick={onFilterOpen} className="filter-btn">
              <img 
                /* Убрали слэш перед img/ */
                src={isDarkTheme ? "img/icon_btn.png" : "img/icon_btn_white.png"} 
                alt="Фильтр" 
                className="filter-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
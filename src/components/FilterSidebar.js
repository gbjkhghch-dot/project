import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const FilterSidebar = ({ isOpen, onClose, onApplyFilters, onClearFilters }) => {
  const [artist, setArtist] = useState('');
  const [location, setLocation] = useState('');
  const [yearFrom, setYearFrom] = useState('');
  const [yearTo, setYearTo] = useState('');

  const handleApply = () => {
    onApplyFilters({ artist, location, yearFrom, yearTo });
    onClose();
  };

  const handleClear = () => {
    setArtist('');
    setLocation('');
    setYearFrom('');
    setYearTo('');
    onClearFilters();
  };

  return (
    <div className={`filter-overlay ${isOpen ? 'active' : ''}`}>
      <div className={`filter-sidebar ${isOpen ? 'open' : ''}`}>
        <button onClick={onClose} className="close-filter-btn">×</button>

        <div className="filter-sidebar-content">
          <AccordionItem title="ARTIST" defaultOpen={true}>
            <select 
              className="sidebar-select"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            >
              <option value="">Select the artist</option>
              <option value="fragonard">Jean-Honoré Fragonard</option>
              <option value="van-gogh">Vincent van Gogh</option>
              <option value="gainsborough">Thomas Gainsborough</option>
            </select>
          </AccordionItem>

          <AccordionItem title="LOCATION">
            <select 
              className="sidebar-select"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select the location</option>
              <option value="louvre">Louvre Museum</option>
              <option value="modern-art">Museum of Modern Art</option>
              <option value="national-gallery">National Gallery</option>
            </select>
          </AccordionItem>

          <AccordionItem title="YEARS">
            <div className="sidebar-years-range">
              <input 
                type="number" 
                placeholder="From" 
                className="sidebar-input"
                value={yearFrom}
                onChange={(e) => setYearFrom(e.target.value)}
              />
              <span className="dash">—</span>
              <input 
                type="number" 
                placeholder="To" 
                className="sidebar-input"
                value={yearTo}
                onChange={(e) => setYearTo(e.target.value)}
              />
            </div>
          </AccordionItem>
        </div>

        <div className="sidebar-actions">
          <button onClick={handleApply} className="sidebar-show-btn">SHOW THE RESULTS</button>
          <button onClick={handleClear} className="sidebar-clear-btn">CLEAR</button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
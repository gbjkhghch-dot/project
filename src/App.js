import React, { useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Pagination from './components/Pagination';
import FilterSidebar from './components/FilterSidebar';
import { useTheme } from './hooks/useTheme';
import { paintingsData } from './data/paintingsData';

function App() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    artist: '',
    location: '',
    yearFrom: '',
    yearTo: ''
  });

  const itemsPerPage = 3;

  const getFilteredPaintings = () => {
    return paintingsData.filter(painting => {
      if (searchTerm && !painting.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      if (filters.artist) {
        const artistMatch = {
          'fragonard': painting.artist === 'JEAN-HONORE FRAGONARD',
          'van-gogh': painting.artist === 'VINCENT VAN GOGH',
          'gainsborough': painting.artist === 'THOMAS GAINSBOROUGH'
        };
        if (!artistMatch[filters.artist]) return false;
      }
      
      if (filters.location) {
        const locationMatch = {
          'louvre': painting.museum === 'LOUVRE MUSEUM',
          'modern-art': painting.museum === 'MUSEUM OF MODERN ART',
          'national-gallery': painting.museum === 'NATIONAL GALLERY'
        };
        if (!locationMatch[filters.location]) return false;
      }
      
      const year = parseInt(painting.date);
      if (filters.yearFrom && year < parseInt(filters.yearFrom)) return false;
      if (filters.yearTo && year > parseInt(filters.yearTo)) return false;
      
      return true;
    });
  };

  const filteredPaintings = getFilteredPaintings();
  const totalFilteredPages = Math.ceil(filteredPaintings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPaintings = filteredPaintings.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalFilteredPages) {
      setCurrentPage(page);
    }
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({ artist: '', location: '', yearFrom: '', yearTo: '' });
    setCurrentPage(1);
  };

  return (
    <div className="App">
      <Header 
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        onSearch={setSearchTerm}
        onFilterOpen={() => setIsFilterOpen(true)}
      />

      <main className="container-1440 main-content">
        <Gallery paintings={currentPaintings} searchTerm={searchTerm} />
      </main>

      {filteredPaintings.length > 0 && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalFilteredPages}
          onPageChange={handlePageChange}
        />
      )}

      <FilterSidebar 
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
        onClearFilters={handleClearFilters}
      />
    </div>
  );
}

export default App;
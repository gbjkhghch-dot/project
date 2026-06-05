import React from 'react';
import Card from './Card';

const Gallery = ({ paintings, searchTerm }) => {
  const filteredPaintings = paintings.filter(painting =>
    painting.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredPaintings.length === 0 && searchTerm) {
    return (
      <div className="gallery-grid">
        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '100px 40px', color: '#aaaaaa', fontSize: '18px' }}>
          <strong>No matches for "{searchTerm}"</strong><br />
          Please try again with a different spelling or keywords.
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-grid">
      {filteredPaintings.map(painting => (
        <Card key={painting.id} painting={painting} />
      ))}
    </div>
  );
};

export default Gallery;
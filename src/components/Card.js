import React from 'react';

const Card = ({ painting }) => {
  return (
    <div className="card" data-artist={painting.artist} data-museum={painting.museum}>
      <div className="card-img-wrapper">
        <img src={painting.image} alt={painting.title} className="card-img" />
      </div>
      <div className="card-bottom">
        <div className="gold-line"></div>
        <div className="card-text">
          <h3 className="card-title">{painting.title}</h3>
          <p className="card-date">{painting.date}</p>
        </div>
        <div className="card-arrow">
          <img className="arrow_icon" src="/img/arrow_icon.png" alt="arrow" />
        </div>
      </div>

      <div className="hover-info">
        <div className="hover-artist">{painting.artist}</div>
        <div className="hover-museum">{painting.museum}</div>
      </div>
    </div>
  );
};

export default Card;
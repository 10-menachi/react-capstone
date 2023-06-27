import PropTypes from 'prop-types';
import React from 'react';

const Rocket = ({ rocketImages, rocketName, rocketDescription }) => (
  <div className="rocket">
    <img src={rocketImages[0]} alt="" />
    <div className="details">
      <h2>{rocketName}</h2>
      <p>{rocketDescription}</p>
      <button type="button" className="reserve-button">Reserve Rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  rocketImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
};

export default Rocket;

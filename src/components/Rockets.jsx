import PropTypes from 'prop-types';
import React from 'react';
import Rocket from './Rocket';

const Rockets = ({ rockets }) => (
  <div className="rockets">
    {rockets.map((rocket) => (
      <Rocket
        key={rocket.id}
        rocketId={rocket.id}
        rocketImage={rocket.image}
        rocketName={rocket.name}
        rocketDescription={rocket.description}
        reserved={rocket.reserved}
      />
    ))}
  </div>
);

Rockets.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
      image: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default Rockets;

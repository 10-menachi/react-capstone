import PropTypes from 'prop-types';
import Rocket from './Rocket';

const Rockets = ({ rockets }) => (
  <div className="rockets">
    {rockets.map((rocket) => (
      <Rocket
        key={rocket.id}
        rocketId={rocket.id}
        rocketImages={rocket.flickr_images}
        rocketName={rocket.rocket_name}
        rocketDescription={rocket.description}
        reserved={rocket.reserved}
      />
    ))}
  </div>
);

Rockets.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape(
    {
      rocket_id: PropTypes.string.isRequired,
      flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
      rocket_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    },
  )).isRequired,
};

export default Rockets;

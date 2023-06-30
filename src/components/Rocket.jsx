import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelReservation, reserveRocket } from '../redux/rockets/rocketSlice';

const Rocket = ({
  rocketId, rocketImages, rocketName, rocketDescription, reserved,
}) => {
  const dispatch = useDispatch();

  const handleCancelReserve = () => {
    dispatch(cancelReservation(rocketId));
  };

  return (
    <div className="rocket" data-testid="rocket">
      <img src={rocketImages[0]} alt="" />
      <div className="details">
        <h2>{rocketName}</h2>
        <p>
          {reserved && <span className="badge">reserved</span>}
          {rocketDescription}
        </p>
        {reserved
          ? (
            <button
              type="button"
              className="reserve-button cancel"
              onClick={handleCancelReserve}
            >
              Cancel Reservation
            </button>
          )
          : (
            <button
              type="button"
              className="reserve-button"
              onClick={() => dispatch(reserveRocket(rocketId))}
            >
              Reserve Rocket
            </button>
          )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;

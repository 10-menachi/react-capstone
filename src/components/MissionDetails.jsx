import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setMissionFree, setMissionReserved } from '../redux/missions/missionsSlice';
import styles from '../styles/Mission.module.css';

const MissionDetails = ({
  name, description, reserved, id,
}) => {
  const dispatch = useDispatch();

  const handleJoin = () => {
    dispatch(setMissionReserved(id));
  };

  const handleLeave = () => {
    dispatch(setMissionFree(id));
  };

  const status = {
    backgroundColor: reserved ? '#379cf6' : '#36454F',
    display: 'block',
    width: '120px',
    border: '1px solid gray',
    color: 'white',
    alignSelf: 'center',
  };

  const row = {
    backgroundColor: reserved ? 'white' : '#E5E4E2',
  };

  return (
    <tr style={row}>
      <td className={styles.name}>{name}</td>
      <td className={styles.description}>{description}</td>
      <td>
        <span style={status}>{reserved ? 'Active Member' : 'Not a Member'}</span>
      </td>
      <td>
        {!reserved && (
          <button type="button" className={styles.join} onClick={handleJoin}>Join Mission</button>
        )}
        {reserved && (
          <button
            type="button"
            className={styles.leave}
            onClick={handleLeave}
          >
            Leave Mission

          </button>
        )}
      </td>
    </tr>
  );
};

MissionDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

MissionDetails.defaultProps = {
  reserved: false,
};

export default MissionDetails;

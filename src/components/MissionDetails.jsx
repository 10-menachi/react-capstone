import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';
import styles from '../styles/Mission.module.css';

const MissionDetails = ({
  name, description, id, reserved,
}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(reserved ? 'Active Member' : 'Not a Member');

  const handleJoin = (e) => {
    e.preventDefault();
    dispatch(joinMission(id));
    if (!reserved) {
      setText('Active Member');
    }
  };

  const handleLeave = (e) => {
    e.preventDefault();
    dispatch(leaveMission(id));
    if (reserved) {
      setText('Not a Member');
    }
  };

  return (
    <tr>
      <td className={styles.name}>{name}</td>
      <td className={styles.description}>{description}</td>
      <td>
        <span>{text}</span>
      </td>
      <td>
        {!reserved ? (
          <button type="button" onClick={handleJoin}>
            Join Mission
          </button>
        ) : (
          <button type="button" onClick={handleLeave}>
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
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

MissionDetails.defaultProps = {
  reserved: false,
};

export default MissionDetails;

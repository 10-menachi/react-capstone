import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Mission.module.css';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const MissionDetails = ({ name, description, id, reserved }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('Not a Member');

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
      setText('Not a member');
    }
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
    <tbody>
      <tr style={row}>
        <td className={styles.name}>{name}</td>
        <td className={styles.description}>{description}</td>
        <td>
          <span style={status}>{text}</span>
        </td>
        <td>
          {!reserved && (
            <button type="button" className={styles.join} onClick={handleJoin}>
              Join Mission
            </button>
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
    </tbody>
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

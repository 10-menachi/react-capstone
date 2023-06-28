import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Mission.module.css';

const Mission = ({ mission }) => (
  <tr>
    <td className={styles.name}>{mission.name}</td>
    <td className={styles.description}>{mission.description}</td>
    <td>
      <button type="button" className="mission-button">
        Not a member
      </button>
    </td>
    <td>
      <button type="button" className="mission-button">
        Join mission
      </button>
    </td>
  </tr>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;

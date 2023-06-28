import PropTypes from 'prop-types';
import Styles from '../styles/Mission.module.css';
import MissionDetails from './MissionDetails';

const Missions = ({ missions }) => (
  <table className={Styles.missionTable}>
    <thead>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {missions.map((mission) => (
        <MissionDetails
          key={mission.mission_id}
          name={mission.mission_name}
          description={mission.description}
          id={mission.mission_id}
          reserved={mission.reserved}
        />
      ))}
    </tbody>
  </table>
);

Missions.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.string.isRequired,
      mission_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Missions;

import { useSelector } from 'react-redux';
import missionStyles from '../styles/Mission.module.css';
import profileStyles from '../styles/MyProfile.module.css';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);
  const bookedMission = missions.filter((mission) => mission.reserved);
  const { rockets } = useSelector((store) => store.rockets);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <>
      <table className={missionStyles.missionTable}>
        <thead>
          <tr>
            <th>My Missions</th>
          </tr>
        </thead>
        <tbody>
          {bookedMission.map((mission) => (
            <tr key={mission.mission_id} className={missionStyles.missionRow}>
              <td>{mission.mission_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={profileStyles.container}>
        <h2>My Rockets</h2>
        <ul>
          {bookedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyProfile;

import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import missionStyles from '../styles/Mission.module.css';
import profileStyles from '../styles/myProfile.module.css';

const MyProfile = ({ rockets }) => {
  const { missions } = useSelector((store) => store.missions);
  const bookedMission = missions.filter((mission) => mission.reserved);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile">
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
      <div className="rockets-prof">
        <h2>My Rockets</h2>
        {bookedRockets.length === 0 ? (
          <p className={profileStyles.noReserve}>No reserved rockets</p>
        ) : (
          bookedRockets.map((rocket) => (
            <div
              key={rocket.rocket_id}
              className="rocket-prof"
            >
              <p>{rocket.rocket_name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

MyProfile.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      rocket_id: PropTypes.string.isRequired,
      flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
      rocket_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default MyProfile;

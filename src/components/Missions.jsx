import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MissionDetails from './MissionDetails';
import { fetchMissions } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((store) => store.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <table>
      <tbody>
        {missions.map((mission) => (
          <MissionDetails
            key={mission.id}
            name={mission.name}
            description={mission.description}
            id={mission.id}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Missions;

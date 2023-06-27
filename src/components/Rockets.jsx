import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
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
};

export default Rockets;

import PropTypes from 'prop-types';

const MyProfile = ({ rockets }) => {
  let borTop = '';
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="profile">
      <div className="missions-prof">
        <h2>My Missions</h2>
      </div>
      <div className="rockets-prof">
        <h2>My Rockets</h2>
        {reservedRockets.length === 0 ? <p className="no-reserve">No reserved rockets</p> : reservedRockets.map((rocket) => {
          borTop = rocket.id === 1 ? 'top' : '';
          return (
            <div className={`rocket-prof ${borTop}`} key={rocket.id}>
              <p>{rocket.rocket_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

MyProfile.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape(
    {
      rocket_id: PropTypes.string.isRequired,
      flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
      rocket_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    },
  )).isRequired,
};

export default MyProfile;

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  return (
    <div className="rocket">
      <img alt="img" className="rocket-img" src={rocket.flickr_images[0]} />
      <div className="rocket-info">
        <h2 className="rocket-title">{rocket.name}</h2>
        <p className="rocket-description">
          {rocket.reserved ? (
            <span className="rocket-reserved">Reserved </span>) : ('')}
          {rocket.description}
        </p>
        <button type="button" className="btn-reserve" onClick={() => dispatch(reserveRocket(rocket.id))}>Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    reserved: PropTypes.bool,
  }),
};

Rocket.defaultProps = {
  rocket: {
    id: '',
    name: '',
    description: '',
    flickr_images: {},
  },
};

export default Rocket;

import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
  <div className="rocket">
    <img alt="img" className="rocket-img" src={rocket.flickr_images} />
    <div className="rocket-info">
      <h2 className="rocket-title">{rocket.name}</h2>
      <p className="rocket-description">
        {rocket.description}
      </p>
      <button type="button" className="btn-reserve">Reserve Rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
  }),
};

Rocket.defaultProps = {
  rocket: {
    id: '',
    name: '',
    description: '',
    flickr_images: '',
  },
};

export default Rocket;

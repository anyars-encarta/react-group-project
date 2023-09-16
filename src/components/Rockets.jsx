import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rocket from './Rocket';
import '../styles/rockets.css';
import { fetchRocketsIfNeeded } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsIfNeeded('rockets'));
  }, [dispatch]);

  const { rockets, isLoading } = useSelector(
    (state) => state.rockets,
  );

  if (isLoading) {
    return <p className="loading">Loading rockets...</p>;
  }

  return (
    <div className="rockets">
      {Object.entries(rockets).map(([key, rocket]) => (
        <Rocket key={key} rocket={rocket} />
      ))}
    </div>
  );
};

export default Rockets;

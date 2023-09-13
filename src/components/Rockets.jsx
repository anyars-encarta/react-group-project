import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rocket from './Rocket';
import '../styles/rockets.css';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets('rockets'));
  }, [dispatch]);

  const { rockets } = useSelector(
    (state) => state.rockets,
  );

  return (
    <div className="rockets">
      {Object.entries(rockets).map(([key, rocket]) => (
        <Rocket key={key} rocket={rocket} />
      ))}
    </div>
  );
};

export default Rockets;

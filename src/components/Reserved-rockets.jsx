import { useDispatch, useSelector } from 'react-redux';
import { cancelationRocket } from '../redux/rockets/rocketsSlice';

const ReservedRocket = () => {
  const dispatch = useDispatch();

  const rockets = useSelector(
    (state) => state.rockets.rockets.filter(
      (rocket) => rocket.reserved,
    ),
  );

  return (
    <div className="my-rockets">
      <table>
        <thead>
          <tr>
            <th>My Rockets</th>
          </tr>
        </thead>
        <tbody>
          {rockets.length === 0 && <tr><td>No Rockets reserved</td></tr>}
          {rockets.map((rocket) => (
            <tr key={rocket.id}>
              <td className="td-rocket">
                {rocket.name}
                <button type="button" className="btn-cancel" onClick={() => dispatch(cancelationRocket(rocket.id))}>Cancel Reservation</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservedRocket;

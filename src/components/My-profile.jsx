import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/my-profile.css';
import { leaveMission } from '../redux/missions/missionsSlice';
import { cancelationRocket } from '../redux/rockets/rocketsSlice';

const MyProfile = () => {
 const msj = useSelector((state) => state.missions.missions.filter((mission) => mission.reserved));
  const rockets = useSelector((state) => state.rockets.rockets.filter((rocket) => rocket.reserved));
  const dispatch = useDispatch();

  const redirectToWikipedia = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="my-profile">
      <div className="my-missions">
        <table>
          <thead>
            <tr>
              <th>My Missions</th>
            </tr>
          </thead>
          <tbody>
            {msj.length === 0 && <tr><td>No missions joined</td></tr>}
            {msj.map((mj) => (
              <tr key={mj.mission_id}>
                <td className="joined-mission">
                  {mj.mission_name}
                  <div className="mission-buttons">
                    <button type="button" className="read-more" onClick={() => redirectToWikipedia(mj.wikipediaUrl)}>
                      Read More
                    </button>
                    <button type="button" className="leave-m" onClick={() => dispatch(leaveMission(mj.mission_id))}>
                      Leave Mission
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="my-rockets">
        <table>
          <thead>
            <tr>
              <th>My Rockets</th>
            </tr>
          </thead>
          <tbody>
            {rockets.length === 0 && <tr><td>No missions joined</td></tr>}
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
    </div>
  );
};

export default MyProfile;

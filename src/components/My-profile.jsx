import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import '../styles/my-profile.css';
import { leaveMission } from '../redux/missions/missionsSlice';
import { cancelationRocket } from '../redux/rockets/rocketsSlice';

// Define your selectors
const selectMissions = (state) => state.missions.missions;
const selectRockets = (state) => state.rockets.rockets;

// Create memoized selectors using reselect
const selectReservedMissions = createSelector(
  [selectMissions],
  (missions) => missions.filter((mission) => mission.reserved),
);

const selectReservedRockets = createSelector(
  [selectRockets],
  (rockets) => rockets.filter((rocket) => rocket.reserved),
);

const MyProfile = () => {
  const msj = useSelector(selectReservedMissions);
  const rockets = useSelector(selectReservedRockets);
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
            {msj && msj.length === 0 ? <tr><td>No missions joined</td></tr> : null}
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
            {rockets.length === 0 ? <tr><td>No rockets reserved</td></tr> : null}
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

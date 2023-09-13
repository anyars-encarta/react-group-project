import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/my-profile.css';
import { leaveMission } from '../redux/missions/missionsSlice';

const MyProfile = () => {
  const msj = useSelector((state) => state.missions.missions.filter((mission) => mission.reserved));
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
            <tr>
              <td>Falcon 1</td>
            </tr>
            <tr>
              <td>Falcon 2</td>
            </tr>
            <tr>
              <td>Falcon 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;

import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/my-profile.css';

const MyProfile = () => {
  const msj = useSelector((state) => state.missions.missions.filter((mission) => mission.reserved));

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
            {msj.map((mj) => (
              <tr key={mj.mission_id}>
                <td>{mj.mission_name}</td>
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

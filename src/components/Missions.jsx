import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions from '../redux/missions/missionsSlice';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="missions">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>{mission.status}</td>
              <td><button type="button">Leave Mission</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;

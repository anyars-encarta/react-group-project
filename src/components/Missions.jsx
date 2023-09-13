import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions, { joinMission } from '../redux/missions/missionsSlice';
import '../styles/missions.css';

const Missions = () => {
  // Are we to use rockets data from the store here?
  // const rockets = useSelector(state => state.rockets);
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchMissions())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        throw new Error('Error fetching missions:', error);
      });
  }, [dispatch]);

  return (
    <div className="missions">
      {loading ? (
        <p>Loading missions...</p>
      ) : (
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
                <td className="description">{mission.description}</td>
                <td className="status">NOT A MEMBER</td>
                <td className="join">
                  <button type="button" onClick={() => dispatch(joinMission(mission.mission_id))}>
                    Join Mission
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Missions;

// Missions.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { fetchMissions } from '../redux/missions/missionsSlice';
import '../styles/missions.css';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    act(() => {
      dispatch(fetchMissions())
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          throw new Error('Error fetching missions:', error);
        });
    });
  }, [dispatch]);

  return (
    <div className="missions">
      {loading ? (
        <p className="loading">Loading missions...</p>
      ) : (
        <table className="missions-table">
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
              <Mission
                key={mission.mission_id} // Add the key prop here with a unique value
                mission={mission}
                reserved={mission.reserved} // Make sure to pass the reserved prop here
                dispatch={dispatch}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Missions;

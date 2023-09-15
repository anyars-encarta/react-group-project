import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/missions/missionsSlice';
import '../styles/missions.css';

const Missions = () => {
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
              <tr key={mission.mission_id} className={mission.reserved ? '' : 'joined'}>
                <td className="name">{mission.mission_name}</td>
                <td className="description">{mission.description}</td>
                <td className="status">
                  <p className={mission.reserved ? 'member' : 'no-member'}>
                    {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
                  </p>
                </td>
                <td className="join">
                  {mission.reserved ? (
                    <button type="button" className="leave-m" onClick={() => dispatch(leaveMission(mission.mission_id))}>
                      Leave Mission
                    </button>
                  ) : (
                    <button type="button" className="join-m" onClick={() => dispatch(joinMission(mission.mission_id))}>
                      Join Mission
                    </button>
                  )}
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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, leaveMission } from '../redux/missions/missionsSlice';

const JoinedMission = () => {
  const dispatch = useDispatch();

  const redirectToWikipedia = (url) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const msj = useSelector(
    (state) => state.missions.missions.filter(
      (mission) => mission.reserved,
    ),
  );

  return (
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
  );
};

export default JoinedMission;

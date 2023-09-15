// Mission.jsx
import React from 'react';
import PropTypes from 'prop-types';

import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const Mission = ({ mission, dispatch }) => {
  const handleJoinMission = () => {
    dispatch(joinMission(mission.mission_id));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(mission.mission_id));
  };

  return (
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
          <button type="button" className="leave-m" onClick={handleLeaveMission}>
            Leave Mission
          </button>
        ) : (
          <button type="button" className="join-m" onClick={handleJoinMission}>
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Mission;

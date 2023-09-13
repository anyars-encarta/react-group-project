import axios from 'axios';

const fetchMissions = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const missions = response.data.map((mission) => ({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    }));

    dispatch({ type: 'FETCH_MISSIONS_SUCCESS', payload: missions });
  } catch (error) {
    dispatch({ type: 'FETCH_MISSIONS_FAILURE', payload: error.message });
  }
};

export const joinMission = (missionId) => ({
  type: 'JOIN_MISSION',
  payload: missionId,
});

export default fetchMissions;

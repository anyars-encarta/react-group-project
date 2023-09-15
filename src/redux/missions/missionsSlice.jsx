const initialState = {
  missions: [],
  error: null,
};

export const fetchMissions = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions').then((res) => res.json()).then((data) => data);
    const missions = response.map((mission) => ({
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

export const leaveMission = (missionId) => ({
  type: 'LEAVE_MISSION',
  payload: missionId,
});

const missionsReducer = (state = initialState, action) => {
  let missionId;
  switch (action.type) {
    case 'FETCH_MISSIONS_SUCCESS':
      return {
        ...state,
        missions: action.payload,
        error: null,
      };
    case 'FETCH_MISSIONS_FAILURE':
      return {
        ...state,
        missions: [],
        error: action.payload,
      };
    case 'JOIN_MISSION':
      missionId = action.payload;
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === missionId) {
            return { ...mission, reserved: true };
          }
          return mission;
        }),
      };
    case 'LEAVE_MISSION':
      missionId = action.payload;
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === missionId) {
            return { ...mission, reserved: false };
          }
          return mission;
        }),
      };

    default:
      return state;
  }
};

export default missionsReducer;

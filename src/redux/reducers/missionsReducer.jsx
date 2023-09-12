const initialState = {
  missions: [],
  error: null,
};

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
      missionId = action.payload; // Assign the value inside the case block
      return {
        ...state,
        missions: state.missions.map((mission) => { // To use rocket
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

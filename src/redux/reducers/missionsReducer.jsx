const initialState = {
  missions: [],
  error: null,
};

const missionsReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default missionsReducer;

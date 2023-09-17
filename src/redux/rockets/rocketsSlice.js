import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const path = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  isLoading: false,
  isFetched: false,
};

export const fetchRocketsIfNeeded = createAsyncThunk(
  'rockets/fetchRocketsIfNeeded',
  async (_, thunkAPI) => {
    const { rockets } = thunkAPI.getState().rockets;
    if (rockets.length > 0) {
      return rockets;
    }

    try {
      const response = await fetch(path).then((res) => res.json());
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) { return rocket; }
        return { ...rocket, reserved: true };
      });
      return { ...state, rockets: newState };
    },
    cancelationRocket: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) { return rocket; }
        return { ...rocket, reserved: false };
      });
      return { ...state, rockets: newState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsIfNeeded.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRocketsIfNeeded.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload;
      })
      .addCase(fetchRocketsIfNeeded.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reserveRocket, cancelationRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;

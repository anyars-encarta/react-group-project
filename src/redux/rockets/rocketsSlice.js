import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const path = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async (thunkAPI) => {
  try {
    return await fetch(path).then((res) => res.json()).then((data) => data);
  } catch (err) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

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
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reserveRocket, cancelationRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;

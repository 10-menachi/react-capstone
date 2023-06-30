import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await fetch(baseUrl);
    const rockets = await response.json();
    const updatedRockets = rockets.map((rocket) => ({
      ...rocket,
      reserved: false,
    }));
    return updatedRockets;
  } catch (error) {
    throw Error(error.message);
  }
});

const initialState = {
  rockets: [],
};
export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return { ...state, rockets: newState };
    },

    cancelReservation: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => (rocket.id !== action.payload
        ? rocket
        : { ...rocket, reserved: false })),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
  },
});

const rocketsReducer = rocketSlice.reducer;
export const { reserveRocket, cancelReservation } = rocketSlice.actions;
export default rocketsReducer;

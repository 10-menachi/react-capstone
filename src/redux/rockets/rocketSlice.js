import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await fetch(baseUrl);
    const rockets = await response.json();
    return rockets;
  } catch (error) {
    throw Error(error.message);
  }
});

const initialState = {
  rockets: [],
};
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
  },
});

const rocketsReducer = rocketSlice.reducer;
export default rocketsReducer;

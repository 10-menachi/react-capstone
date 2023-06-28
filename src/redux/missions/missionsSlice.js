import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/missions');
      const missions = response.data;
      const updatedMissions = missions.map((mission) => ({
        ...mission,
        reserved: false,
      }));
      return updatedMissions;
    } catch (error) {
      return error;
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissionReserved: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      return { ...state, missions: newState };
    },
    setMissionFree: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      return { ...state, missions: newState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.missions = action.payload;
    });
  },
});

export const { setMissionReserved, setMissionFree } = missionsSlice.actions;
export default missionsSlice.reducer;

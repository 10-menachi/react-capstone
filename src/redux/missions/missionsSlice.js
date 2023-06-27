import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  },
);

export const joinMission = createAsyncThunk(
  'missions/joinMissions',
  async (missionId) => {
    const response = await axios.post('https://api.spacexdata.com/v3/missions', {
      mission_id: missionId,
    });
    return response.data;
  },
);

export const leaveMission = createAsyncThunk(
  'missions/leaveMissions',
  async (missionId) => {
    const response = await axios.delete('https://api.spacexdata.com/v3/missions', {
      mission_id: missionId,
    });
    return response.data;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissionReserved: (state, action) => {
      const { id, reserved } = action.payload;
      state.missions = state.missions
        .map((mission) => (mission.id !== id ? mission : { ...mission, reserved }));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.missions = action.payload;
    });
  },
});

export const { setMissionReserved } = missionsSlice.actions;
export default missionsSlice.reducer;

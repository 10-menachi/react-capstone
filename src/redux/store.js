import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketsReducer,
  },
});

export default store;

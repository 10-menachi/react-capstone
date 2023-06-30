import axios from 'axios';
import { fetchMissions, setMissionFree, setMissionReserved } from '../src/redux/missions/missionsSlice';
import store from '../src/redux/store';

describe('MissionsSlice', () => {
  beforeEach(() => {
    store.dispatch({ type: 'RESET' });
  });

  describe('fetchMissions', () => {
    test('should fetch missions and update state', async () => {
      await store.dispatch(fetchMissions());

      const response = await axios.get('https://api.spacexdata.com/v3/missions');
      const expectedMissions = response.data.map((mission) => ({
        ...mission,
        reserved: false,
      }));

      expect(store.getState().missions.missions).toEqual(expectedMissions);
    });
  });

  describe('setMissionReserved', () => {
    test('should set mission as reserved', async () => {
      const missionId = 2;
      await store.dispatch(setMissionReserved(missionId));

      const response = await axios.get('https://api.spacexdata.com/v3/missions');
      const expectedMissions = response.data.map((mission) => ({
        ...mission,
        reserved: false,
      }));
      expect(store.getState().missions.missions).toEqual(expectedMissions);
    });
  });

  describe('setMissionFree', () => {
    test('should set mission as free', async () => {
      const missionId = 1;
      await store.dispatch(setMissionFree(missionId));

      const response = await axios.get('https://api.spacexdata.com/v3/missions');
      const expectedMissions = response.data.map((mission) => ({
        ...mission,
        reserved: false,
      }));

      expect(store.getState().missions.missions).toEqual(expectedMissions);
    });
  });
});

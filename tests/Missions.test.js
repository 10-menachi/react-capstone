import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../src/components/Missions';
import missionsReducer from '../src/redux/missions/missionsSlice';

const mockStore = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});
const store = mockStore({});

const missions = [
  {
    mission_id: '1',
    mission_name: 'Mission 1',
    description: 'Mission 1 description',
    reserved: false,
  },
  {
    mission_id: '2',
    mission_name: 'Mission 2',
    description: 'Mission 2 description',
    reserved: true,
  },
];

describe('Missions component', () => {
  it('renders the missions correctly', () => {
    render(
      <Provider store={store}>
        <Missions missions={missions} />
      </Provider>,
    );

    missions.forEach((mission) => {
      const nameElement = screen.getByText(mission.mission_name);
      const descriptionElement = screen.getByText(mission.description);

      expect(nameElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    });
  });
});

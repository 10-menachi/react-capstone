import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import MissionDetails from '../src/components/MissionDetails';
import missionsReducer from '../src/redux/missions/missionsSlice';

const mockStore = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});
const store = mockStore({});

describe('Tests for MissionDetails component', () => {
  const mission = {
    name: 'Mission name',
    description: 'Mission description',
    id: '1',
    reserved: false,
  };

  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <MissionDetails
              id={mission.id}
              name={mission.name}
              description={mission.description}
              reserved={mission.reserved}
            />
          </tbody>
        </table>
      </Provider>,
    );

    const nameElement = screen.getByText(mission.name);
    const descriptionElement = screen.getByText(mission.description);

    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});

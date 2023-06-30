import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Rockets from '../src/components/Rockets';
import rocketsReducer from '../src/redux/rockets/rocketSlice';

const mockRockets = [
  {
    id: '1',
    flickr_images: ['image1.jpg', 'image2.jpg'],
    rocket_name: 'Rocket 1',
    description: 'Rocket 1 description',
    reserved: false,
  },
  {
    id: '2',
    flickr_images: ['image3.jpg', 'image4.jpg'],
    rocket_name: 'Rocket 2',
    description: 'Rocket 2 description',
    reserved: true,
  },
];

describe('Rockets component', () => {
  test('renders rocket details correctly', () => {
    const store = configureStore({
      reducer: {
        rockets: rocketsReducer,
      },
    });

    render(
      <Provider store={store}>
        <Rockets rockets={mockRockets} />
      </Provider>,
    );

    const rocketElements = screen.getAllByTestId('rocket');
    expect(rocketElements).toHaveLength(mockRockets.length);

    mockRockets.forEach((rocket, index) => {
      const rocketElement = rocketElements[index];
      const rocketNameElement = screen.getByText(rocket.rocket_name);
      const rocketDescriptionElement = screen.getByText(rocket.description);

      expect(rocketElement).toBeInTheDocument();
      expect(rocketNameElement).toBeInTheDocument();
      expect(rocketDescriptionElement).toBeInTheDocument();

      if (rocket.reserved) {
        const cancelReservationButton = screen.getByText('Cancel Reservation');
        expect(cancelReservationButton).toBeInTheDocument();
      } else {
        const reserveRocketButton = screen.getByText('Reserve Rocket');
        expect(reserveRocketButton).toBeInTheDocument();
      }
    });
  });
});

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rocket from '../src/components/Rocket';
import { cancelReservation, reserveRocket } from '../src/redux/rockets/rocketSlice';

const mockStore = configureStore([]);

describe('Rocket component', () => {
  let store;
  const rocketId = 1;
  const rocketImage = 'rocket1.png';
  const rocketName = 'Falcon 9';
  const rocketDescription = 'This is a rocket description';
  const reserved = false;

  beforeEach(() => {
    store = mockStore({});
  });

  test('renders rocket details correctly', () => {
    render(
      <Provider store={store}>
        <Rocket
          rocketId={rocketId}
          rocketImage={rocketImage}
          rocketName={rocketName}
          rocketDescription={rocketDescription}
          reserved={reserved}
        />
      </Provider>,
    );

    const rocketNameElement = screen.getByText(rocketName);
    const rocketDescriptionElement = screen.getByText(rocketDescription);
    const reserveButton = screen.getByText('Reserve Rocket');

    expect(rocketNameElement).toBeInTheDocument();
    expect(rocketDescriptionElement).toBeInTheDocument();
    expect(reserveButton).toBeInTheDocument();
    expect(reserveButton).toHaveClass('reserve-button');
    expect(reserveButton).not.toHaveClass('cancel');
    expect(screen.queryAllByText('')).not.toEqual([]);

    expect(screen.queryByText('Cancel Reservation')).toBeNull();
  });

  test('renders reserved rocket correctly', () => {
    render(
      <Provider store={store}>
        <Rocket
          rocketId={rocketId}
          rocketImage={rocketImage}
          rocketName={rocketName}
          rocketDescription={rocketDescription}
          reserved
        />
      </Provider>,
    );

    const cancelReservationButton = screen.getByText('Cancel Reservation');
    expect(cancelReservationButton).toBeInTheDocument();
    expect(cancelReservationButton).toHaveClass('reserve-button', 'cancel');
  });

  test('handles cancel reservation correctly', () => {
    const cancelReservationMock = jest.fn();
    store.dispatch = cancelReservationMock;

    render(
      <Provider store={store}>
        <Rocket
          rocketId={rocketId}
          rocketImage={rocketImage}
          rocketName={rocketName}
          rocketDescription={rocketDescription}
          reserved
        />
      </Provider>,
    );

    const cancelReservationButton = screen.getByText('Cancel Reservation');
    fireEvent.click(cancelReservationButton);

    expect(cancelReservationMock).toHaveBeenCalledWith(cancelReservation(rocketId));
  });

  test('handles reserve rocket correctly', () => {
    const reserveRocketMock = jest.fn();
    store.dispatch = reserveRocketMock;

    render(
      <Provider store={store}>
        <Rocket
          rocketId={rocketId}
          rocketImage={rocketImage}
          rocketName={rocketName}
          rocketDescription={rocketDescription}
          reserved={reserved}
        />
      </Provider>,
    );

    const reserveButton = screen.getByText('Reserve Rocket');
    fireEvent.click(reserveButton);

    expect(reserveRocketMock).toHaveBeenCalledWith(reserveRocket(rocketId));
  });
});

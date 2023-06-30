import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { useSelector } from 'react-redux';
import MyProfile from '../src/components/MyProfile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const mockedUseSelector = useSelector;

const rockets = [
  {
    rocket_id: '1',
    flickr_images: ['image1.jpg', 'image2.jpg'],
    rocket_name: 'Rocket 1',
    description: 'Rocket 1 description',
    reserved: true,
  },
  {
    rocket_id: '2',
    flickr_images: ['image3.jpg', 'image4.jpg'],
    rocket_name: 'Rocket 2',
    description: 'Rocket 2 description',
    reserved: true,
  },
];

const missions = [
  {
    mission_id: '1',
    mission_name: 'Mission 1',
    reserved: true,
  },
  {
    mission_id: '2',
    mission_name: 'Mission 2',
    reserved: true,
  },
];

describe('MyProfile component', () => {
  beforeEach(() => {
    mockedUseSelector.mockReturnValue({ missions });
  });

  it('renders booked missions correctly', () => {
    render(<MyProfile rockets={rockets} />);

    missions.forEach((mission) => {
      const missionElement = screen.getByText(new RegExp(mission.mission_name));
      expect(missionElement).toBeInTheDocument();
    });
  });

  it('renders booked rockets correctly', () => {
    render(<MyProfile rockets={rockets} />);

    rockets.forEach((rocket) => {
      const rocketElement = screen.getByText(new RegExp(rocket.rocket_name));
      expect(rocketElement).toBeInTheDocument();
    });
  });

  it('renders "No reserved rockets" message when there are no booked rockets', () => {
    const emptyRockets = [];
    render(<MyProfile rockets={emptyRockets} />);

    const messageElement = screen.getByText('No reserved rockets');
    expect(messageElement).toBeInTheDocument();
  });
});

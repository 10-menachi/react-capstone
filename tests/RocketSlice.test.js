import {
  cancelReservation, fetchRockets, reserveRocket, rocketSlice,
} from '../src/redux/rockets/rocketSlice';

describe('rocketSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      rockets: [],
    };
  });

  test('should handle reserveRocket', () => {
    const rocketId = 1;
    const state = {
      rockets: [
        { id: 1, name: 'Falcon 1', reserved: false },
        { id: 2, name: 'Falcon 9', reserved: false },
      ],
    };

    const newState = rocketSlice.reducer(state, reserveRocket(rocketId));

    expect(newState.rockets).toEqual([
      { id: 1, name: 'Falcon 1', reserved: true },
      { id: 2, name: 'Falcon 9', reserved: false },
    ]);
  });

  test('should handle cancelReservation', () => {
    const rocketId = 2;
    const state = {
      rockets: [
        { id: 1, name: 'Falcon 1', reserved: true },
        { id: 2, name: 'Falcon 9', reserved: true },
      ],
    };

    const newState = rocketSlice.reducer(state, cancelReservation(rocketId));

    expect(newState.rockets).toEqual([
      { id: 1, name: 'Falcon 1', reserved: true },
      { id: 2, name: 'Falcon 9', reserved: false },
    ]);
  });

  describe('extraReducers', () => {
    test('should handle fetchRockets.fulfilled', () => {
      const fetchedRockets = [
        { id: 1, name: 'Falcon 1', reserved: false },
        { id: 2, name: 'Falcon 9', reserved: false },
      ];

      const newState = rocketSlice.reducer(initialState, fetchRockets.fulfilled(fetchedRockets));

      expect(newState.rockets).toEqual(fetchedRockets);
    });
  });
});

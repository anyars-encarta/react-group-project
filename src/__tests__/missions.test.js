import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import missionsReducer from '../redux/missions/missionsSlice';

const missionStore = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

const data = [
  {
    mission_id: 'mission1',
    mission_name: 'Mission Apolo',
    description: 'Mission Mission, Mission Mission Space',
  },
  {
    mission_id: 'mission2',
    mission_name: 'Mission Apolo 2',
    description: 'Mission Mission, Mission Mission Space 2',
  },
  {
    mission_id: 'mission3',
    mission_name: 'Mission Apolo 3',
    description: 'Mission Mission, Mission Mission Space 3',
  },
];

describe('Missions component', () => {
  it('renders a list of missions', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data) }));
    const { asFragment } = render(
      <Provider store={missionStore}>
        <Missions />
      </Provider>,
    );

    await waitFor(() => expect(screen.getByText('Mission Apolo')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Mission Apolo 2')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Mission Apolo 3')).toBeInTheDocument());

    expect(asFragment()).toMatchSnapshot();
  });
});

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rocketsReducer from '../redux/rockets/rocketsSlice';
import Rockets from '../components/Rockets';

const rocketsStore = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

const data = [
  {
    id: 'Apolo1',
    name: 'id1',
    description: 'Apolo Apolo, Apolo 1',
    flickr_images: ['apolo1.png'],
    reserved: false,
  },
  {
    id: 'Apolo2',
    name: 'id2',
    description: 'Apolo Apolo, Apolo 2',
    flickr_images: ['apolo2.png'],
    reserved: false,
  },
  {
    id: 'Apolo3',
    name: 'id3',
    description: 'Apolo Apolo, Apolo 3',
    flickr_images: ['apolo3.png'],
    reserved: false,
  },
];

describe('Rockets component', () => {
  it('renders a list of rockets', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data) }));
    const { asFragment } = render(
      <Provider store={rocketsStore}>
        <Rockets />
      </Provider>,
    );

    await waitFor(() => expect(screen.getByText('id2')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('id1')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('id3')).toBeInTheDocument());

    expect(asFragment()).toMatchSnapshot();
  });
});

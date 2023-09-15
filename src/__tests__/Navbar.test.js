import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'; // Import userEvent
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

// Import Jest's snapshot testing utilities

describe('Navbar', () => {
  it('renders without errors', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    expect(screen.getByText("Space Travelers' Hub")).toBeInTheDocument();
  });

  // Create a snapshot of the rendered component
  const tree = renderer.create(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('navigates to Rockets page when Rockets link is clicked', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  const rocketsNavLink = screen.getByText('Rockets');
  expect(rocketsNavLink).toBeInTheDocument();

  // Wrap the click event in act
  act(() => {
    userEvent.click(rocketsNavLink);
  });

  expect(window.location.pathname).toBe('/');
});

it('navigates to Missions page when Missions link is clicked', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  const missionsNavLink = screen.getByText('Missions');
  expect(missionsNavLink).toBeInTheDocument();

  // Wrap the click event in act
  act(() => {
    userEvent.click(missionsNavLink);
  });

  expect(window.location.pathname).toBe('/missions');
});

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './navbar';

function renderComponent() {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
}

describe('navbar.tsx', () => {
  it('should render a header with fixed position', () => {
    renderComponent();

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('fixed');
  });

  it('should show page title on navbar', () => {
    renderComponent();

    const pageTitle = screen.getByRole('heading', {
      level: 1,
    });
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent('React + TypeScript Starter');
  });

  it('should render a dark mode toggle', () => {
    renderComponent();
    const darkModeToggle = screen.getByRole('button');
    expect(darkModeToggle).toBeInTheDocument();
  });
});

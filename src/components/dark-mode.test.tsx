import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DarkMode from './dark-mode';

describe('dark-mode.tsx', () => {
  it('should render dark mode toggle button', () => {
    render(<DarkMode />);

    const darkModeButton = screen.getByRole('button');
    expect(darkModeButton).toBeInTheDocument();
  });

  it('should render light mode as default', () => {
    render(<DarkMode />);

    const darkModeButton = screen.getByRole('button');
    const sunIcon = within(darkModeButton).getByTestId('sun-icon');
    expect(sunIcon).toBeInTheDocument();
  });

  it('should switch to dark mode on click and back', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<DarkMode />);

    // Act
    const darkModeButton = screen.getByRole('button');
    await user.click(darkModeButton);

    // Assert
    const moonIcon = within(darkModeButton).getByTestId('moon-icon');
    expect(moonIcon).toBeInTheDocument();

    await user.click(darkModeButton);

    const sunIcon = within(darkModeButton).getByTestId('sun-icon');
    expect(sunIcon).toBeInTheDocument();
  });
});

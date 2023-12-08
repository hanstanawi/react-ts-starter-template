import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './button';

const mockFn = jest.fn();

describe('button.tsx', () => {
  it('should render children props element', () => {
    render(<Button>Test Button</Button>);

    const button = screen.getByRole('button', { name: /test button/i });

    expect(button).toBeInTheDocument();
  });

  it('should call onClick props callback', async () => {
    const user = userEvent.setup();
    render(<Button onClick={mockFn}>Test button</Button>);

    const button = screen.getByRole('button', { name: /test button/i });
    await user.click(button);

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should render button element without children props', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});

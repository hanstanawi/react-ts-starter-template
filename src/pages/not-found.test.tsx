import { render, screen, within } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import Homepage from './home';
import NotFoundPage from './not-found';

describe('not-found.tsx', () => {
  it('should render not found page page', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <Homepage />,
          errorElement: <NotFoundPage />,
        },
      ],
      { initialEntries: ['/', '/sadasdf34'], initialIndex: 1 },
    );

    render(<RouterProvider router={router} />);

    // Get not found page title
    const title = screen.getByRole('heading', { level: 1, name: /oops!/i });
    const errorText = screen.getByText(
      /sorry, an unexpected error has occurred./i,
    );
    const errorMessage = screen.getByText(/not found/i);
    const goBackButton = screen.getByRole('button');
    const goHomeLink = within(goBackButton).getByRole('link');

    expect(title).toBeInTheDocument();
    expect(errorText).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
    expect(goBackButton).toBeInTheDocument();
    expect(goHomeLink).toBeInTheDocument();
    expect(goHomeLink).toHaveAttribute('href', '/');
  });
});

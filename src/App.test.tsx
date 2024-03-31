import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Homepage from './pages/home';
import NotFoundPage from './pages/not-found';

function renderComponent(index: number = 0) {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [
          {
            path: '',
            element: <Homepage />,
            index: true,
          },
        ],
      },
    ],
    { initialEntries: ['/'], initialIndex: index },
  );

  render(<RouterProvider router={router} />);
}

describe('App.tsx', () => {
  it('should show navbar and outlet content', () => {
    renderComponent();

    // Navbar
    const navbar = screen.getByRole('banner');
    // Homepage Title
    const title = screen.getByRole('heading', {
      level: 1,
      name: 'React + TypeScript',
    });

    expect(navbar).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it('should render homepage on "/" route', () => {
    renderComponent();

    const main = screen.getByRole('main');

    // Homepage elements
    const title = within(main).getByRole('heading', {
      level: 1,
    });
    const subTitle = within(main).getByRole('heading', { level: 2 });

    const reactLink = screen.getByTestId('react-link');
    const reactLogo = within(reactLink).getByRole('img');
    const tsLink = screen.getByTestId('ts-link');
    const tsLogo = within(tsLink).getByRole('img');

    expect(title).toHaveTextContent('React + TypeScript');
    expect(subTitle).toHaveTextContent('Starter Template');
    expect(reactLogo).toHaveAttribute('alt', 'React logo');
    expect(reactLink).toHaveAttribute('href', 'https://react.dev');
    expect(tsLogo).toHaveAttribute('alt', 'TS logo');
    expect(tsLink).toHaveAttribute('href', 'https://typescriptlang.org');
  });

  it('should render learn-more page on "/learn-more" route', () => {
    renderComponent(1); // navigate to learn more route

    const main = screen.getByRole('main');

    // Learn more elements
    const pageTitle = within(main).getByRole('heading', {
      level: 1,
    });
    const list = within(main).getByRole('list');
    const listItems = within(main).getAllByRole('listitem');

    expect(pageTitle).toHaveTextContent(/what's inside/i);

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(14);
  });

  it('should navigate between pages', async () => {
    const user = userEvent.setup();
    renderComponent();

    // First render homepage
    expect(screen.getByText('React + TypeScript')).toBeInTheDocument();

    // Navigate to learn more link
    const learnMoreLink = screen.getByRole('link', { name: /learn more/i });
    await user.click(learnMoreLink);

    expect(screen.getByText("What's inside?")).toBeInTheDocument();

    // Navigate back
    const homeLink = screen.getByRole('link', { name: /home/i });
    await user.click(homeLink);

    expect(screen.getByText('React + TypeScript')).toBeInTheDocument();
  });
});

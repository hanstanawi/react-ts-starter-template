import '@testing-library/jest-dom';

import { render, screen, within } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './components/root-layout';
import Homepage from './pages/home';
import NotFoundPage from './pages/not-found';

function renderComponent(pageIndex: number = 0) {
  const memoryRouter = createMemoryRouter(
    [
      {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
          {
            path: '/',
            element: <Homepage />,
            index: true,
          },
        ],
      },
    ],
    { initialEntries: ['/', '/sadasdf34'], initialIndex: pageIndex },
  );
  render(<RouterProvider router={memoryRouter} />);
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

  it('should render homepage content on /', () => {
    renderComponent();

    const main = screen.getByRole('main');

    // Homepage elements
    const title = within(main).getByRole('heading', {
      level: 1,
    });
    const subTitle = within(main).getByRole('heading', { level: 2 });

    const reactLink = screen.getByTestId('react-link');
    const reactLogo = within(reactLink).getByRole('img');
    const tailwindLink = screen.getByTestId('tailwind-link');
    const tailwindLogo = within(tailwindLink).getByRole('img');
    const tsLink = screen.getByTestId('ts-link');
    const tsLogo = within(tsLink).getByRole('img');
    const vercelLink = screen.getByTestId('vercel-link');
    const netlifyLink = screen.getByTestId('netlify-link');
    const useTemplateLink = screen.getByTestId('use-template-link');
    const githubLink = screen.getByTestId('repo-link');

    expect(title).toHaveTextContent('React + TypeScript');
    expect(subTitle).toHaveTextContent('Starter Template');
    expect(reactLogo).toHaveAttribute('alt', 'React logo');
    expect(reactLink).toHaveAttribute('href', 'https://react.dev');
    expect(tailwindLogo).toHaveAttribute('alt', 'Tailwind logo');
    expect(tailwindLink).toHaveAttribute('href', 'https://tailwindcss.com/');
    expect(tsLogo).toHaveAttribute('alt', 'TS logo');
    expect(tsLink).toHaveAttribute('href', 'https://typescriptlang.org');
    expect(netlifyLink).toBeInTheDocument();
    expect(vercelLink).toBeInTheDocument();
    expect(useTemplateLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
  });

  it('should render not found page on unknown route', () => {
    renderComponent(1);

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

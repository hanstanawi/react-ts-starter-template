import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import Homepage from './home';

function renderComponent() {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>,
  );
}

describe('home.tsx', () => {
  it('should display React + TypeScript Starter Template title', () => {
    renderComponent();
    const title = screen.getByRole('heading', { level: 1 });
    const subTitle = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('React + TypeScript');
    expect(subTitle).toHaveTextContent('Starter Template');
  });

  it('should display React and TypeScript logo and link', () => {
    renderComponent();

    const reactLink = screen.getByTestId('react-link');
    const reactLogo = within(reactLink).getByRole('img');
    const tailwindLink = screen.getByTestId('tailwind-link');
    const tailwindLogo = within(tailwindLink).getByRole('img');
    const tsLink = screen.getByTestId('ts-link');
    const tsLogo = within(tsLink).getByRole('img');

    expect(reactLogo).toHaveAttribute('alt', 'React logo');
    expect(reactLink).toHaveAttribute('href', 'https://react.dev');
    expect(tailwindLogo).toHaveAttribute('alt', 'Tailwind logo');
    expect(tailwindLink).toHaveAttribute('href', 'https://tailwindcss.com/');
    expect(tsLogo).toHaveAttribute('alt', 'TS logo');
    expect(tsLink).toHaveAttribute('href', 'https://typescriptlang.org');
  });

  it('should display title', () => {
    renderComponent();

    const mainTitle = screen.getByRole('heading', {
      level: 1,
      name: 'React + TypeScript',
    });
    const subTitle = screen.getByRole('heading', {
      level: 2,
      name: /starter template/i,
    });

    expect(mainTitle).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  it('should display the description of the page', async () => {
    renderComponent();

    const vercelLink = screen.getByTestId('vercel-link');
    const netlifyLink = screen.getByTestId('netlify-link');
    const useTemplateLink = screen.getByTestId('use-template-link');
    const githubLink = screen.getByTestId('repo-link');

    expect(netlifyLink).toBeInTheDocument();
    expect(vercelLink).toBeInTheDocument();
    expect(useTemplateLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
  });
});

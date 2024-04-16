import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CTA from './cta';

function renderComponent() {
  render(
    <MemoryRouter>
      <CTA />
    </MemoryRouter>,
  );
}

describe('cta.tsx', () => {
  it('should contain deploy vercel link', () => {
    renderComponent();

    const vercelLink = screen.getByTestId('vercel-link');
    const vercelLogo = within(vercelLink).getByRole('img');
    expect(vercelLink).toBeInTheDocument();
    expect(vercelLogo).toBeInTheDocument();
    expect(vercelLink).toHaveAttribute(
      'href',
      'https://vercel.com/new/clone?repository-url=https://github.com/hanstanawi/react-ts-starter-template',
    );
    expect(vercelLogo).toHaveAttribute('src', 'https://vercel.com/button');
    expect(vercelLogo).toHaveAttribute('alt', 'Vercel deploy button');
  });

  it('should contain deploy to netlify link', () => {
    renderComponent();

    const netlifyLink = screen.getByTestId('netlify-link');
    const netlifyLogo = within(netlifyLink).getByRole('img');
    expect(netlifyLink).toBeInTheDocument();
    expect(netlifyLogo).toBeInTheDocument();
    expect(netlifyLink).toHaveAttribute(
      'href',
      'https://app.netlify.com/start/deploy?repository=https://github.com/hanstanawi/react-ts-starter-template',
    );
    expect(netlifyLogo).toHaveAttribute(
      'src',
      'https://www.netlify.com/img/deploy/button.svg',
    );
    expect(netlifyLogo).toHaveAttribute('alt', 'Netlify deploy button');
  });

  it('should contain use template cta button', () => {
    renderComponent();

    const useTemplateLink = screen.getByTestId('use-template-link');
    const templateButton = within(useTemplateLink).getByRole('button', {
      name: /use this template/i,
    });

    expect(useTemplateLink).toBeInTheDocument();
    expect(templateButton).toBeInTheDocument();
    expect(useTemplateLink).toHaveAttribute(
      'href',
      'https://github.com/hanstanawi/react-ts-starter-template/generate',
    );
  });

  it('should contain open on github button', () => {
    renderComponent();

    const githubLink = screen.getByTestId('repo-link');
    const githubButton = within(githubLink).getByRole('button', {
      name: /Open on Github/i,
    });

    expect(githubLink).toBeInTheDocument();
    expect(githubButton).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/hanstanawi/react-ts-starter-template/tree/with-react-query',
    );
  });
});

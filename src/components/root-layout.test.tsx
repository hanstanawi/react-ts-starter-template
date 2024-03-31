import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import RootLayout from './root-layout';

function TestComponent() {
  return (
    <div>
      <h1>Test Component</h1>
    </div>
  );
}

describe('RootLayout.tsx', () => {
  it('should render the outlet children component for react router', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<TestComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const testComponentTitle = screen.getByRole('heading', {
      level: 1,
      name: /test component/i,
    });
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    expect(testComponentTitle).toBeInTheDocument();
  });
});

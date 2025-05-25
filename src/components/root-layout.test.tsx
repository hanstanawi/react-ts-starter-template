import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';

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
    const StubComponent = createRoutesStub([
      {
        path: '/',
        Component: RootLayout, // Use 'Component' instead of 'element' here
        children: [
          {
            index: true, // Use 'index: true' for the child route that matches the parent's path
            Component: TestComponent,
          },
        ],
      },
    ]);

    render(<StubComponent />);

    const testComponentTitle = screen.getByRole('heading', {
      level: 1,
      name: /test component/i,
    });
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    expect(testComponentTitle).toBeInTheDocument();
  });
});

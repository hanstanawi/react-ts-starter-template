import { Outlet } from 'react-router-dom';

import Navbar from './navbar';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen  items-center justify-center">
        <div className="max-w-5xl">
          <Outlet />
        </div>
      </main>
    </>
  );
}

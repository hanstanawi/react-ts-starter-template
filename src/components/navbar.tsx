import { DarkMode } from './dark-mode';

export default function Navbar() {
  return (
    <header className="fixed flex w-full justify-center py-10">
      <div className="flex h-full w-full max-w-3xl items-center justify-center">
        <div className="flex h-full w-full items-center justify-between">
          <h1 className="text-base font-semibold">
            React + TypeScript Starter
          </h1>
          <DarkMode />
        </div>
      </div>
    </header>
  );
}

import { Link } from 'react-router-dom';

import reactLogo from '@/assets/react.svg';
import tailwindLogo from '@/assets/tailwind.svg';
import tsLogo from '@/assets/ts.svg';
import CTA from '@/components/cta';

export default function Homepage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-x-8 py-6">
        <Link
          to="https://react.dev"
          target="_blank"
          rel="noreferrer"
          data-testid="react-link"
        >
          <img
            src={reactLogo}
            className="w-14 animate-spin-slow"
            alt="React logo"
          />
        </Link>
        <Link
          to="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          data-testid="tailwind-link"
        >
          <img src={tailwindLogo} className="w-16" alt="Tailwind logo" />
        </Link>
        <Link
          to="https://typescriptlang.org"
          target="_blank"
          rel="noreferrer"
          data-testid="ts-link"
        >
          <img src={tsLogo} className="w-12" alt="TS logo" />
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">React + TypeScript</h1>
        <h2 className="text-xl font-bold">Starter Template</h2>
      </div>

      <p className="mt-4 text-center text-sm opacity-60 dark:opacity-80">
        A starter template to kickstart your React and TypeScript frontend
        project
      </p>
      <CTA />
    </div>
  );
}

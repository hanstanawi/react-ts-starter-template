import { GitBranchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from './ui/button';

export default function CTA() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-y-4">
      <div className="flex items-center gap-x-4">
        <Link
          aria-label="Deploy to Vercel"
          rel="noopener noreferrer"
          to="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsozonome%2Fnextarter-chakra"
        >
          <img
            src="https://vercel.com/button"
            alt="Vercel deploy button"
            height={10}
          />
        </Link>

        <Link
          aria-label="Deploy to Netlify"
          rel="noopener noreferrer"
          to="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/nextarter-chakra"
        >
          <img
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
            height={10}
          />
        </Link>
      </div>
      <div className="flex w-full items-center gap-x-8">
        <Link
          to="https://github.com/hanstanawi/react-ts-starter-template/generate"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="text-sm">Use This Template</Button>
        </Link>
        <Link
          to="https://github.com/hanstanawi/react-ts-starter-template"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="flex items-center gap-x-2 text-sm">
            <GitBranchIcon size={12} className="inline" />
            Open in Github
          </Button>
        </Link>
      </div>
    </div>
  );
}

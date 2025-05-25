import { isRouteErrorResponse, Link, useRouteError } from 'react-router';

import Button from '@/components/ui/button';

export default function NotFoundPage() {
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-4">
      <h1 className="text-5xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <Button>
        <Link to="/">Go to Homepage</Link>
      </Button>
    </div>
  );
}

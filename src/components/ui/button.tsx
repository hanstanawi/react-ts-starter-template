import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'cursor-pointer rounded-lg border border-transparent bg-[#f9f9f9] px-5 py-2 hover:border-primary focus:outline-1 dark:bg-[#1a1a1a]',
        className,
      )}
    >
      {children}
    </button>
  );
}

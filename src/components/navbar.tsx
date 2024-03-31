import { NavLink } from 'react-router-dom';

function StyledNavLink({ href, title }: { href: string; title: string }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? 'rounded-2xl bg-primary bg-opacity-10 px-4 py-1.5 text-sm'
          : 'px-4 py-1.5 text-sm font-medium hover:text-primary'
      }
    >
      {title}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <header className="fixed flex w-full justify-center py-10">
      <div className="flex h-full w-full max-w-3xl items-center justify-center">
        <div className="flex h-full w-full items-center justify-between">
          <h1 className="text-base font-semibold">
            React + TypeScript Starter
          </h1>
          <nav>
            <ul className="flex gap-x-6">
              <li>
                <StyledNavLink href="/" title="Home" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

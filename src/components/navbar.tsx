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
    <header className="fixed h-6 w-full p-10">
      <div className="flex h-full items-center justify-between">
        <h1 className="text-lg font-semibold">React + TypeScript Starter</h1>
        <nav>
          <ul className="flex gap-x-6">
            <li>
              <StyledNavLink href="/" title="Home" />
            </li>
            <li>
              <StyledNavLink href="learn-more" title="Learn More" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

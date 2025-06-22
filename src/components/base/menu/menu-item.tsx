import { Link, useLocation } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import cn from 'classnames';

export function MenuItem({
  pathname,
  children,
}: PropsWithChildren<{ pathname: string }>) {
  const location = useLocation();
  const isActive = location.pathname === pathname;

  return (
    <li>
      <Link
        className={cn('block px-2 py-1 rounded-md transition-colors', {
          'bg-primary/10 font-medium text-primary': isActive,
          'text-gray-600 hover:bg-gray-100': !isActive,
        })}
        to={pathname}
      >
        {children}
      </Link>
    </li>
  );
}

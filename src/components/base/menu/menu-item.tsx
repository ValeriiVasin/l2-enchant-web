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
        className={cn('block px-4 py-2 rounded-md hover:bg-gray-100', {
          'bg-blue-100 font-medium text-blue-700': isActive,
          'text-gray-700': !isActive,
        })}
        to={pathname}
      >
        {children}
      </Link>
    </li>
  );
}

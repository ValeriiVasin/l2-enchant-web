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
          'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200':
            isActive,
          'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700':
            !isActive,
        })}
        to={pathname}
      >
        {children}
      </Link>
    </li>
  );
}

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
    <li className={cn('pure-menu-item', { 'pure-menu-active': isActive })}>
      <Link className="pure-menu-link" to={pathname}>
        {children}
      </Link>
    </li>
  );
}

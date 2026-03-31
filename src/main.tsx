import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './router';
import './globals.css';

const ENCODING_KEY = 73;

// Keep host values encoded so the plain domains are not directly searchable in built assets.
const decodeValue = (encoded: number[]) =>
  String.fromCharCode(...encoded.map((value) => value ^ ENCODING_KEY));

const isAllowedHost = (hostname: string) => {
  // localhost
  const localHost = decodeValue([37, 38, 42, 40, 37, 33, 38, 58, 61]);
  // .netlify.app
  const netlifySuffix = decodeValue([
    103, 39, 44, 61, 37, 32, 47, 48, 103, 40, 57, 57,
  ]);

  return hostname === localHost || hostname.endsWith(netlifySuffix);
};

const enforceAllowedHost = () => {
  if (typeof window === 'undefined') {
    return true;
  }

  if (isAllowedHost(window.location.hostname)) {
    return true;
  }

  const redirectTarget = decodeValue([
    // https://l2c-enchant.netlify.app
    33, 61, 61, 57, 58, 115, 102, 102, 37, 123, 42, 100, 44, 39, 42, 33, 40, 39,
    61, 103, 39, 44, 61, 37, 32, 47, 48, 103, 40, 57, 57,
  ]);

  window.location.replace(redirectTarget);
  return false;
};

if (enforceAllowedHost()) {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <Router />
    </StrictMode>,
  );
}

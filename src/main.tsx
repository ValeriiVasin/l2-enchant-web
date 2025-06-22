import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './router';
import './globals.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);

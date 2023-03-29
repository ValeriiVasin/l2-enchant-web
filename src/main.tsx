import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './router';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);

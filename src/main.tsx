import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/app/index.css'; // global styles
import { Root } from './Root';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/app/index.css'; // global styles
import { Root } from './Root';
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);

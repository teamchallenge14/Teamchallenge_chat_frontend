import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/app/index.css'; // global styles
import App from '@/app/App'; // main app component

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element with id "root" not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

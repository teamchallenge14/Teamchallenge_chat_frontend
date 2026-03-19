import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'; // global styles
import { AuthProvider, QueryProvider, RouterProvider } from './app/providers';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <QueryProvider>
      <AuthProvider>
        <RouterProvider />
      </AuthProvider>
    </QueryProvider>
  </StrictMode>,
);

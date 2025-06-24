import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css'; // Corrected path to global styles
import App from './App'; // Removed .tsx extension as per typical module resolution

/**
 * Main application entry point.
 * Initializes the React application and renders the root App component.
 */
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount the application. Ensure an element with id 'root' exists in your HTML.");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

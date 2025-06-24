import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRouter';

/**
 * The main application component.
 * It sets up the React Router and renders the application routes.
 * @returns {JSX.Element} The root application component.
 */
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

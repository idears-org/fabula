import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Layout from '@/shared/components/layouts/Layout'; // Updated import path

/**
 * AppLayout component that wraps page content with a common Layout.
 * It uses React Router's Outlet to render nested routes.
 * @returns {JSX.Element} The layout component wrapping the current route's content.
 */
function AppLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

/**
 * Defines the main application routes.
 * It uses a shared AppLayout for routes that require it.
 * @returns {JSX.Element} The configured application routes.
 */
const AppRoutes = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<Navigate to="/welcome" replace />} />
      <Route path="welcome" element={<div>Welcome to the Application! Create your first page.</div>} />
      {/* Add other routes here */}
    </Route>
  </Routes>
);

export default AppRoutes;

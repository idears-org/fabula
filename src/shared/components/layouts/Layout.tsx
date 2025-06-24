import React from 'react';

/**
 * Props for the Layout component.
 */
interface LayoutProps {
  /** The content to be rendered within the layout. */
  children: React.ReactNode;
}

/**
 * Main layout component for the application.
 * @param {LayoutProps} props - The props for the component.
 * @returns {React.ReactElement} The rendered layout structure.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;

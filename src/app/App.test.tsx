import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

/**
 * @file Tests for the main App component.
 */
describe('App Component', () => {
  /**
   * Test case: Renders the App component without crashing.
   * It checks if the main application structure, including routing and a main landmark,
   * is rendered.
   */
  it('renders the main application structure', () => {
    render(<App />);

    // Check if a main landmark is rendered, which is typically part of the Layout component
    // used by pages within AppRoutes. This indicates that the app has initialized
    // and rendered a basic page structure.
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
});

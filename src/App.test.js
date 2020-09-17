import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Dream Broker', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Dream Broker/i);
  expect(linkElement).toBeInTheDocument();
});

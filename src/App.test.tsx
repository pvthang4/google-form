import React from 'react';
import { render, screen } from '@testing-library/react';
import GoogleForm from './GoogleForm';

test('renders learn react link', () => {
  render(<GoogleForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

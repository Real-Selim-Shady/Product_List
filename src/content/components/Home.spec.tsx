import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders Home', () => {
    render(<Home />);
    const textElement = screen.getByText(/Start coding here/i);
    expect(textElement).toBeInTheDocument();
  })
});

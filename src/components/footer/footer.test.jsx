import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Footer from './footer';

describe('Footer Component', () => {
  it('Renders the footer with correct content', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

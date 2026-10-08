import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Header from './header.jsx';
import { MemoryRouter } from 'react-router';

describe('Header Component', () => {
  it('Renders the header content correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

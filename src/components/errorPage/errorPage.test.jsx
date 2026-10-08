import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import ErrorPage from './errorPage.jsx';

describe('ErrorPage', () => {
  it('ErrorPage content is rendered correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

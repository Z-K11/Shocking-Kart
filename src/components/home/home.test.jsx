import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import Home from './home.jsx';

vi.mock('../homeFlashCard/flashCards.jsx', () => ({
  default: () => <div data-testId="flashCard-mock"></div>,
}));

describe('Home component', () => {
  it('Renders correct hero content', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});

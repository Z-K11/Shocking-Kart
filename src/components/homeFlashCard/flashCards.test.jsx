import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import FlashCards from './flashCards';

describe('FlashCards Component', () => {
  it('Renders the flash cards with correct content', () => {
    const { container } = render(<FlashCards />);
    expect(container).toMatchSnapshot();
  });
});

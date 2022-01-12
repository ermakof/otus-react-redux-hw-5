import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '@src/components/SearchInput';

describe('SearchInput', () => {
  it('Render <Input>', () => {
    const handleChange = jest.fn();
    const { asFragment } = render(<Input onChange={handleChange} autoFocus={true} />);
    expect(asFragment()).toMatchSnapshot();
    const filterInput = screen.getByRole(/filterInput/gi);
    expect(filterInput).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import AppHeader from '@src/AppHeader';

describe('AppHeader', () => {
  it('Render <AppHeader>', () => {
    const handleChangeFilter = jest.fn();
    const { asFragment } = render(<AppHeader onChangeFilter={handleChangeFilter} />);
    expect(asFragment()).toMatchSnapshot();
    const headerTitle = screen.getByRole(/headerTitle/gi);
    expect(headerTitle).toBeInTheDocument();
    const filterInput = screen.getByRole(/filterInput/gi);
    expect(filterInput).toBeInTheDocument();
  });
});

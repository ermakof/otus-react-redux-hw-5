import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBottom from '@src/AppBottom';

describe('AppBody', () => {
  it('Render <AppBottom> without data', () => {
    const { asFragment } = render(<AppBottom countUsers={50} />);
    expect(asFragment()).toMatchSnapshot();
    const dataMessage = screen.getByText(/Количество пользователей: 50/gi);
    expect(dataMessage).toBeInTheDocument();
  });
});

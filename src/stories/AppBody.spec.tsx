import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBody from '@src/AppBody';
import data from '@src/stories/__mock__/data';

describe('AppBody', () => {
  it('Render <AppBody> without data', () => {
    const { asFragment } = render(<AppBody data={[]} />);
    expect(asFragment()).toMatchSnapshot();
    const dataMessage = screen.getByRole(/dataMessage/gi);
    expect(dataMessage).toBeInTheDocument();
  });

  it('Render <AppBody> with data', () => {
    const { asFragment } = render(<AppBody data={data} />);
    expect(asFragment()).toMatchSnapshot();
    const dataList = screen.getByRole(/dataList/gi);
    expect(dataList).toBeInTheDocument();
    const dataItems = screen.getAllByRole(/dataItem/gi);
    expect(dataItems.length).toBe(50);
  });
});

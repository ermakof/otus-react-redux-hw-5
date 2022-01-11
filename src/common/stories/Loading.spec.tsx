import React from 'react';
import { render } from '@testing-library/react';
import Loading from '@src/common/Loading';

describe('Loading', () => {
  it('Render <Loading>', () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });
});

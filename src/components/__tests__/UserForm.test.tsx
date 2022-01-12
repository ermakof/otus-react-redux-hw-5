import React from 'react';
import { render, screen } from '@testing-library/react';
import UserForm from '@src/components/UserForm';

describe('UserForm', () => {
  it('Render <UserForm>', () => {
    const handleSubmit = jest.fn();
    const fio = {
      firstName: 'Иван',
      lastName: 'Иванов',
    };
    const { asFragment } = render(<UserForm onSubmit={handleSubmit} {...fio} />);
    expect(asFragment()).toMatchSnapshot();
    const userForm = screen.getByRole(/userForm/gi);
    expect(userForm).toBeInTheDocument();
    const firstName = screen.getByDisplayValue(/Иван/gi);
    expect(firstName).toBeInTheDocument();
    const lastName = screen.getByDisplayValue(/Иванов/gi);
    expect(lastName).toBeInTheDocument();
  });
});

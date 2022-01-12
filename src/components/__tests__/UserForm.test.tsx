import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserForm from '@src/components/UserForm';
import userEvent from '@testing-library/user-event';

const fio = {
  firstName: 'Иван',
  lastName: 'Иванов',
};

describe('UserForm', () => {
  it('Render <UserForm>', () => {
    const handleSubmit = jest.fn();
    const { asFragment } = render(<UserForm onSubmit={handleSubmit} {...fio} />);
    expect(asFragment()).toMatchSnapshot();
    const userForm = screen.getByRole(/userForm/gi);
    expect(userForm).toBeInTheDocument();
    const firstName = screen.getByDisplayValue(/Иван/gi);
    expect(firstName).toBeInTheDocument();
    const lastName = screen.getByDisplayValue(/Иванов/gi);
    expect(lastName).toBeInTheDocument();
  });

  it('Change input <UserForm>', async () => {
    const handleSubmit = jest.fn();
    render(<UserForm onSubmit={handleSubmit} {...fio} />);
    const firstName = screen.getByLabelText(/Имя/i);
    userEvent.clear(firstName);
    userEvent.type(firstName, 'Петр');
    const lastName = screen.getByLabelText(/Фамилия/i);
    userEvent.clear(lastName);
    userEvent.type(lastName, 'Петров');

    userEvent.click(screen.getByRole('button', { name: /Сохранить/i }));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        firstName: 'Петр',
        lastName: 'Петров',
      })
    );
  });
});

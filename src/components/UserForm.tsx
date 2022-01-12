import React, { FC } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import styled from '@emotion/styled';

const Root = styled.div`
  label {
    margin: 5px;
  }

  button {
    margin: 5px;
  }
`;

export interface IUserForm {
  firstName: string;
  lastName: string;
  onSubmit: (values: IUserData) => void;
}

type IUserData = Omit<IUserForm, 'onSubmit'>;

const UserForm: FC<IUserForm> = ({ onSubmit, ...userData }) => {
  const handleSubmit = (values: IUserData, { setSubmitting }: FormikHelpers<IUserData>) => {
    setSubmitting(true);
    onSubmit(values);
  };

  return (
    <Root role="userForm">
      <Formik initialValues={{ ...userData }} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="firstName">Имя</label>
          <Field id="firstName" name="firstName" placeholder="Введите ммя" />

          <label htmlFor="lastName">Фамилия</label>
          <Field id="lastName" name="lastName" placeholder="Введите фамилию" />

          <button type="submit">Сохранить</button>
        </Form>
      </Formik>
    </Root>
  );
};

export default UserForm;

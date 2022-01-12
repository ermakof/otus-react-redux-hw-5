import React, { PureComponent } from 'react';
import { Formik, Field, Form } from 'formik';
import styled from '@emotion/styled';

const Root = styled.div`
  label {
    margin-right: 5px;
  }

  button {
    margin: 5px;
  }

  input {
    margin-right: 30px;
  }

  form {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const UserInfo = styled.label`
  opacity: 0.5;
  margin-left: 25px;
`;

export interface IUserFormProps {
  firstName: string;
  lastName: string;
  onSubmit: (values: IUserData) => void;
}

export type IUserData = Omit<IUserFormProps, 'onSubmit'>;

class UserForm extends PureComponent<IUserFormProps, IUserData> {
  constructor(props: IUserFormProps) {
    super(props);

    this.state = {
      firstName: props.firstName,
      lastName: props.lastName,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getFio = this.getFio.bind(this);
  }

  handleSubmit() {
    this.props.onSubmit({ ...this.state });
  }

  getFio() {
    return `${this.state.firstName} ${this.state.lastName}`;
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.currentTarget;
    this.setState((state) => ({ ...state, [id]: value }));
  }

  render() {
    return (
      <Root role="userForm">
        <Formik initialValues={{ ...this.state }} onSubmit={this.handleSubmit}>
          <Form>
            <label htmlFor="firstName">Имя</label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="Введите ммя"
              value={this.state.firstName}
              onChange={this.handleChange}
            />

            <label htmlFor="lastName">Фамилия</label>
            <Field
              id="lastName"
              name="lastName"
              placeholder="Введите фамилию"
              value={this.state.lastName}
              onChange={this.handleChange}
            />

            <button type="submit">Сохранить</button>

            <UserInfo>{this.getFio()}</UserInfo>
          </Form>
        </Formik>
      </Root>
    );
  }
}

export default UserForm;

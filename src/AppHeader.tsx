import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import Input from '@src/components/SearchInput';
import UserForm, { IUserData } from '@src/components/UserForm';

const Root = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  margin: 0 250px;
`;

interface IAppHeaderProps {
  onChangeFilter: (val: string) => void;
}
interface IAppHeaderState {
  userData: IUserData;
}
class AppHeader extends PureComponent<IAppHeaderProps, IAppHeaderState> {
  constructor(props: IAppHeaderProps) {
    super(props);

    const lsData = localStorage.getItem('hw4:user-data');
    let userData = {
      firstName: '',
      lastName: '',
    };
    if (lsData) {
      userData = JSON.parse(lsData);
    }

    this.state = { userData };
  }

  handleSubmit(userData: IUserData) {
    localStorage.setItem('hw4:user-data', JSON.stringify(userData));
  }

  render() {
    return (
      <Root>
        <UserForm onSubmit={this.handleSubmit} {...this.state.userData} />
        <Input onChange={this.props.onChangeFilter} autoFocus={false} />
      </Root>
    );
  }
}

export default AppHeader;

import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import Input from '@src/common/Input';

const Root = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Title = styled.div`
  margin: 10px;
`;

interface IAppHeader {
  onChangeFilter: (val: string) => void;
}
class AppHeader extends PureComponent<IAppHeader> {
  constructor(props: IAppHeader) {
    super(props);
  }

  render() {
    return (
      <Root>
        <Title role="headerTitle">Дз №4</Title>
        <Input onChange={this.props.onChangeFilter} autoFocus={true} />
      </Root>
    );
  }
}

export default AppHeader;

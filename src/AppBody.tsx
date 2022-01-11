import React, { Component } from 'react';
import styled from '@emotion/styled';
import { IUserList } from '@src/App';

const Root = styled.div`
  height: 70vh;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  overflow-y: auto;
  margin: auto;
  width: 70%;

  p {
    text-align: center;
  }
`;

interface IAppBodyProps {
  data: IUserList;
}
class AppBody extends Component<IAppBodyProps> {
  shouldComponentUpdate(nextProps: IAppBodyProps) {
    // Притянутая за уши оптимизация компонента
    return nextProps.data.length !== this.props.data.length;
  }

  render() {
    const { data } = this.props;

    return (
      <Root>
        {data.length ? (
          <ul role="dataList">
            {this.props.data.map((item) => (
              <li key={item.id} role="dataItem">
                {item.userId} {item.title}
              </li>
            ))}
          </ul>
        ) : (
          <p role="dataMessage">Нет данных</p>
        )}
      </Root>
    );
  }
}

export default AppBody;

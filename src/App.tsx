import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import AppHeader from '@src/AppHeader';
import AppBottom from '@src/AppBottom';
import AppBody from '@src/AppBody';
import Loading from '@src/common/Loading';

const Root = styled.div`
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const appGlobal = css`
  body {
    background: #282c34;
    color: white;
    margin: 0;
    padding: 0;
    min-height: '100vh';
    max-width: '100vw';
  }
`;

interface IUser {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export type IUserList = Array<IUser>;

interface IAppState {
  isLoading: boolean;
  data: IUserList;
  filter: string;
}
class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isLoading: false,
      data: [],
      filter: '',
    };

    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  async componentDidMount() {
    this.setState({ ...this.state, isLoading: true });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = (await response.json()) as IUserList;
      this.setState({ data, isLoading: false });
      console.log(data);
    } catch {
      this.setState({ ...this.state, isLoading: false });
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
  }

  handleChangeFilter(filter: string) {
    this.setState({ ...this.state, filter });
    console.log('New filter:', filter);
  }

  getData() {
    if (!this.state.filter) {
      return this.state.data;
    }
    return this.state.data.filter((item) => item.title.indexOf(this.state.filter) > -1);
  }

  render() {
    const data = this.getData();
    return (
      <>
        <Root>
          <Global styles={appGlobal} />
          <AppHeader onChangeFilter={this.handleChangeFilter} />
          <AppBody data={data} />
          <AppBottom countUsers={data.length} />
        </Root>
        {this.state.isLoading && <Loading />}
      </>
    );
  }
}

export default App;

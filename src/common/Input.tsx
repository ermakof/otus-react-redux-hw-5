import React, { PureComponent } from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
  display: flex;
  input {
    margin-left: 10px;
    width: 500px;
  }
`;

interface IInputProps {
  onChange: (val: string) => void;
  autoFocus?: boolean;
}
interface IInputState {
  value: string;
}
export default class Input extends PureComponent<IInputProps, IInputState> {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: IInputProps) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.input = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  componentDidUpdate(prevProps: {}, prevState: IInputState) {
    const oldValue = prevState.value.trimStart();
    const newValue = this.state.value.trimStart();
    if (oldValue !== newValue) {
      this.props.onChange(newValue);
    }
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  handleKeydown = () => {
    if (
      this.props.autoFocus &&
      this.input.current &&
      document.activeElement !== this.input.current
    ) {
      this.input.current.focus();
    }
  };

  render() {
    return (
      <Root>
        Поиск:
        <input
          role="filterInput"
          ref={this.input}
          autoFocus={this.props.autoFocus}
          onChange={this.handleChange}
        />
      </Root>
    );
  }
}

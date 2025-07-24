import React from "react";

class App extends React.Component {
  constructor(props) {
    // reunder()가 실행되기 전에 실행됨.
    super(props);
    console.log("constructor: hello");
  }
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    // 컴포넌트가 처음 화면에 나타날 때 실행됨. render()가 실행된 후에 실행됨.
    console.log("componentDidMount: compoonent rendered");
  }
  compoentnDidUpdate() {
    // 컴포넌트가 업데이트될 때 실행됨. state나 props가 변경될 때마다 실행됨. // 너는 왜 안되고..?
    console.log("componentDidUpdate: I just updated");
  }
  componentWillUnmount() {
    // 컴포넌트가 화면에서 사라질 때 실행됨. // 나오다가 안나오누..
    console.log("Goodbye, cruel world");
  }
  render() {
    console.log("render: I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

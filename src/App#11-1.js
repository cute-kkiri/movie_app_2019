import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    // this.state.count = 1;
    // this.setState({ count: 1 }); // 왜 setState를 사용해야 하는가?
    // this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    // this.state.count = -1;
    // this.setState({ count: -1 }); // 왜 setState를 사용해야 하는가?
    // this.setState({ count: this.state.count - 1 });
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
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

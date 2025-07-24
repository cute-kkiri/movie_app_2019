import React from "react";

class App extends React.Component {
  state = {
    // 미래에 쓰일 state를 먼저 선언하는 것은 필수가 아님.
    isLoading: true, // mount되자마자 isLoading은 기본적으로 true loading되고 있으니까
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false }); // 6초 후에 isLoading을 false로 변경
    }, 6000);
  }
  render() {
    const { isLoading } = this.state; // state에 있는 isLoading을 가져옴
    return <div>{isLoading ? "Loading.." : "We are ready"}</div>;
  }
}

export default App;

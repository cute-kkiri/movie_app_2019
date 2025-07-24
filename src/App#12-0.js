import axios from "axios";
import React from "react";

class App extends React.Component {
  state = {
    // 미래에 쓰일 state를 먼저 선언하는 것은 필수가 아님.
    isLoading: true, // mount되자마자 isLoading은 기본적으로 true loading되고 있으니까
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading.." : "We are ready"}</div>;
  }
}

export default App;

import axios from "axios";
import React from "react";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    // 미래에 쓰일 state를 먼저 선언하는 것은 필수가 아님.
    isLoading: true, // mount되자마자 isLoading은 기본적으로 true loading되고 있으니까
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    // console.log(movies);

    this.setState({ movies, isLoading: false }); // this.setState({movies: movies, isLoading: false}); // movies를 state에 저장
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading.."
          : movies.map((movie) => {
              // console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;

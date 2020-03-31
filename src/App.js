import React from 'react';
import axios from 'axios';
import Movie from './Movie'
import './App.css'

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  // 비동기
  getMovies = async() => {
    // await 은 async가 있을때만 쓰인다.
    // async = 이건 좀 시간이 걸리니 기다려줘.
    // 무엇을?
    // await이 앞에있는 axios를.
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    // console.log(movies)
    
    // 같은 코드 : this.setState({movies}) = this.setState({movies: movies})
    this.setState({movies, isLoading: false})
  } 
  componentDidMount() {
    // setTimeout(() => {
      // this.setState({isLoading: false})
      this.getMovies();
    // }, 6000)
  }
  render() {
    const {isLoading, movies} = this.state
    return <section className="container">
      {isLoading
      ?
      <div className="loader">
        <span className="loader__text">Loading..</span>
      </div>
      :
      <div className="movies">
        {movies.map(movie => {
          return <Movie key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  />
        })}  
      </div>
      }
    </section>
  }
}

export default App;

import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie'
import './Home.css'

// react hook 을 사용한다면 state를 사용하기 위해 class component를 사용하지 않아도 된다.
class Home extends React.Component {
  // Tip: router를 통해 다른 컴포넌트를 열었다가 다시 Home 컴포넌트를 열었을때, state가 비워졌기 떄문에 isLoading이 true로 초기화된다.
  // Tip: 이를 해결하기 위한 방법으로 redux.js 가 있다. state를 저장해두는 것이다.
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

export default Home;

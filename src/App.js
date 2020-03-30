import React from 'react';
import axios from 'axios';

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
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
  } 
  componentDidMount() {
    setTimeout(() => {
      // this.setState({isLoading: false})
      this.getMovies();
    }, 6000)
  }
  render() {
    const {isLoading} = this.state
    return <div>
      {isLoading ? "Loading..." : "We are ready"}
    </div>
  }
}

export default App;

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Movie.css'

// React state를 사용하지 않으면 굳이 class component로 할 필요없다. 고로 function component로 한다.
function Movie({id, year, title, summary, poster, genres}) {
  // return 하는 것은 jsx이다. jsx에서 html에서와 같이 'class'를 사용하면 콘솔 오류 발생한다. jsx에서는 'class' 대신 'className'을 사용한다.
  // 'class' 말고도 <label>의 'for'와 같이 javascript와 겹치는 네임은 jsx에서 그대로 쓸 수 없다.
  return (
    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        year, // year: year,
        title,
        summary,
        poster,
        genres
      }
    }}>
    <div className="movie">
    <img src={poster} alt={title} title={title} />
    <div className="movie__data">
      <h3 className="movie__title">{title}</h3>
      <h5 className="movie__yaer">{year}</h5>
      <ul className="movie__genres">
        {genres.map((genre, index) => (
          <li key={index} className="genrens__genre">{genre}</li>
        ))}
      </ul>
      <p className="movie__summary">{summary.slice(0,180)}...</p>
    </div>
  </div>
  </Link>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie
import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

// React state를 사용하지 않으면 굳이 class component로 할 필요없다. 고로 function component로 한다.
function Movie({year, title, summary, poster}) {
  return <div class="movie">
    <img src={poster} alt={title} />
    <div class="movie__data">
      <h3 class="movie__title">{title}</h3>
      <h5 class="movie__yaer">{year}</h5>
      <p class="movie__summary">{summary}</p>
    </div>
  </div>
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

export default Movie
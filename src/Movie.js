import React from 'react'
import PropTypes from 'prop-types'

// React state를 사용하지 않으면 굳이 class component로 할 필요없다. 고로 function component로 한다.
function Movie({id, year, title, summary, poster}) {
  return <h4>{title}</h4>
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

export default Movie
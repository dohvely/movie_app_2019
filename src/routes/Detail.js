import React from 'react'

// function Detail({location}) {
//   return (<span>hello</span>)
// }

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props

    if(location.state === undefined) {
      // redirect
      history.push("/")
    }
  }
  render() {
    const { location } = this.props
    if(location.state) {
      return <span>{location.state.title}</span>
    } else {
      return null
    }
  }
}

export default Detail
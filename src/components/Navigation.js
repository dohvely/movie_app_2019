import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  // Link는 Router 안에서 쓸 수 있다. (App.js에서 이 Navigation component를 import하여 Router 안에서 사용하고 있음)
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navigation
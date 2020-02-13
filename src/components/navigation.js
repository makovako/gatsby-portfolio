import React from "react"
import styles from "./navigation.module.css"
import { Link } from "gatsby"

export default props => (
  <div className='nav'>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
)

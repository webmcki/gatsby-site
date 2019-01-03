import React from 'react'
import { Link } from 'gatsby'

const menu = () => (
  <div
    style={{
      background: '#f4f4f4',
      paddingTop: '10px',
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/services">services</Link>
      </li>
      <li>
        <Link to="/blog">블로그</Link>
      </li>
    </ul>
  </div>
)

export default menu

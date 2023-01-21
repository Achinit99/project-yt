import React from 'react'

function Main({ name, city, position }) {
  return (
    <div>
      <h1>This is the Main Page</h1>
      <ul>
        <li>{name}</li>
        <li>{city}</li>
        <li>{position}</li>
      </ul>
    </div>
  )
}

export default Main;

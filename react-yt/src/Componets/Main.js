import React from 'react'

function Main({ name, city, position }) {
  return (
    <div>
      <p>This is the Main Page</p>
      <ul>
        <li>{name}</li>
        <li>{city}</li>
        <li>{position}</li>
      </ul>
    </div>
  )
}

export default Main;

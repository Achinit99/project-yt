function Main({ name, city, position }) {
  return (
    <div>
      <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Food image" />
      <div>
        <h4>{name}</h4>
        <p>
          <span>{city}</span>
          <span>{position}</span>
        </p>
      </div>
    </div>
  )
}

export default Main;

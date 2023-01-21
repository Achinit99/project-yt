import './App.css';
import Main from "./Componets/Main"

const myData = [
  {
    name: 'Achini',
    city: 'Kurunegala',
    position: 'App Developer',
  },
  {
    name: 'Avishka',
    city: 'Narammala',
    position: 'Software Developer',
  },
  {
    name: 'Dimuthu',
    city: 'Pothuhera',
    position: 'Senior Developer',
  },
]

function App() {
  return (
    <>
      <div>
        {myData.map(({ name, city, position }, index) => {
          return <h5><Main key={index} name={name} city={city} position={position} /></h5>;
        })}
      </div>
    </>
  );
}

export default App;

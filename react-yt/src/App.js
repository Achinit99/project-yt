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
      <Main />
      <div>
        {myData.map((eleme) => {
          return <h5>{eleme.name}</h5>;
        })}
      </div>
    </>
  );
}

export default App;

import './App.css';
import Main from "./Componets/Main"
import myData from "./Data/myData";

const NewBlock = () => {
  return (
    <>
      {
        myData.map(({ name, city, position, id }) => {
          return <Main key={id} name={name} city={city} position={position} />;
        })
      }
    </>
  )
}

function App() {
  // const mainBlock = myData.map(({ name, city, position, id }) => {
  //   return <Main key={id} name={name} city={city} position={position} />;
  // })

  return (
    <>
      <div>
        <p>My App</p>
        <NewBlock />
      </div>
    </>
  );
}

export default App;

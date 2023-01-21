import './App.css';
import Main from "./Componets/Main"
import myData from "./Data/myData";

function App() {
  return (
    <>
      <div>
        <p>My App</p>
        {myData.map(({ name, city, position, id }) => {
          return <Main key={id} name={name} city={city} position={position} />;
        })}
      </div>
    </>
  );
}

export default App;

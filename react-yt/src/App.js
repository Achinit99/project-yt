import './App.css';
import Main from "./Componets/Main"
import myData from "./Data/myData";

function App() {
  const MainBlock = myData.map(({ name, city, position, id }) => {
    return <Main key={id} name={name} city={city} position={position} />;
  })

  return (
    <>
      <div>
        <p>My App</p>
        {MainBlock}
      </div>
    </>
  );
}

export default App;

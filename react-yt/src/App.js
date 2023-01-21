import './App.css';
import Main from "./Componets/Main"
import myData from "./Data/myData";

const MainBlock = myData.map(({ name, city, position, id }) => {
  return <Main key={id} name={name} city={city} position={position} />;
})

function App() {
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

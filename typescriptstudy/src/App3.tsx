import "./App.css";
import ByeComponent from "./ByeComponent";
import HelloComponent from "./HelloComponent";

function App() {
  return (
    <>
      <HelloComponent name='김일' age={20} />
      <br />
      <br />
      <ByeComponent name='김일' />
    </>
  );
}

export default App;
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
    <div>
        <NavBar />
      <ItemListContainer greeting="Hi this is my e-commerce"/>
    </div>
    
    </>
  );
}

export default App;

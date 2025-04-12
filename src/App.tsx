import { Title } from "./components/Title";
import { DragAndDrop } from "./components/DragAndDrop";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="container-main flex">
      <NavBar />
      <Title />
      <DragAndDrop />
    </div>
  );
}

export default App;

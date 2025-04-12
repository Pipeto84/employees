import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Scheduling } from "./pages/Scheduling";
import "./styles/App.css"

function App() {
  return (
    <div className="container-main flex">
      <NavBar />
      <Routes>
        <Route path="/scheduling" element={<Scheduling />} />
      </Routes>
    </div>
  );
}

export default App;

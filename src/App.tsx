import { NavBar } from "./components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Scheduling } from "./pages/Scheduling";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { EditEmployee } from "./pages/EditEmployee";
import "./styles/App.css";

function App() {
  return (
    <div className="container-main flex">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/list" element={<List />} />
        <Route path="/edit-employee" element={<EditEmployee />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

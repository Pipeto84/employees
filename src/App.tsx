import { NavBar } from "./components/NavBar";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Scheduling } from "./pages/Scheduling";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Edit } from "./pages/Edit";
import { New } from "./pages/New";
import "./styles/App.css";

function App() {
  return (
    <div className="container-main flex">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/list" element={<List />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

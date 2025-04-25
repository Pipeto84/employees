import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="topnav">
      <NavLink className="active" to="/">
        Home
      </NavLink>
      <NavLink className="active" to="/scheduling">
        Schedule
      </NavLink>
      <NavLink className="active" to="/list">
        List
      </NavLink>
      {/* <NavLink className="active" to="/new">
        New
      </NavLink> */}
    </div>
  );
};

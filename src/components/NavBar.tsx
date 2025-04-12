import "../styles/NavBar.css"

export const NavBar = () => {
  return (
    <div className="topnav">
      <a className="active" href="/scheduling">Scheduling</a>
      <a className="active" href="/list">List</a>
      <a className="active" href="/new">New</a>
    </div>
  )
}

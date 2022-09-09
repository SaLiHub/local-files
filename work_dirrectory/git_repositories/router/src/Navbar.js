import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
    <ul>
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/contacts">Contacts</NavLink></li>
      <li><NavLink to="/info">Info</NavLink></li>
    </ul>
    <a href="/contacts">Contacts</a>
    <button onClick={() => window.history.back()}>Back</button>
    <button onClick={() => window.history.forward()}>Forward</button>
    <button onClick={() => window.history.replaceState("/another-new-url")}>Replace</button>
    <button onClick={() =>  window.history.pushState("object or string", "", "/another")}>New url</button>
  </nav> 
  )
}

export default Navbar;
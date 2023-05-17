import { Link, NavLink } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/acerca">Acerca</Link>
        <Link to="/about">About</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/inexistente">Error 404</Link>
      </nav>
      <nav className="menu">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/acerca"
        >
          Acerca
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/contacto"
        >
          Contacto
        </NavLink>
      </nav>
    </>
  );
}

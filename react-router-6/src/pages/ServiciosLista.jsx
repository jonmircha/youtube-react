import { Link } from "react-router-dom";

export function ServiciosLista({ servicios }) {
  return (
    <>
      <h2>Conoce nuestros servicios</h2>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            <Link to={`/servicios/${servicio.id}`}>{servicio.nombre}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

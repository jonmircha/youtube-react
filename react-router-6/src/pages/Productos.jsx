import { Link } from "react-router-dom";

export function Productos({ productos }) {
  return (
    <section>
      <h1>Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

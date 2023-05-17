import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Acerca } from "./pages/Acerca";
import { Contacto } from "./pages/Contacto";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Error404 } from "./pages/Error404";
import { Productos } from "./pages/Productos";
import { ProductoDetalle } from "./pages/ProductoDetalle";
import { useState } from "react";
import { Servicios } from "./pages/Servicios";
import { ServiciosGarantia } from "./pages/ServiciosGarantia";
import { ServiciosLista } from "./pages/ServiciosLista";
import { ServiciosHome } from "./pages/ServiciosHome";
import { ServiciosPoliticas } from "./pages/ServiciosPoliticas";
import { ServicioDetalle } from "./pages/ServicioDetalle";

function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 200 },
    { id: 3, nombre: "Producto 3", precio: 300 },
    { id: 4, nombre: "Producto 4", precio: 400 },
    { id: 5, nombre: "Producto 5", precio: 500 },
  ]);

  const [servicios, setServicios] = useState([
    { id: 1, nombre: "Servicio 1", precio: 1000 },
    { id: 2, nombre: "Servicio 2", precio: 2000 },
    { id: 3, nombre: "Servicio 3", precio: 3000 },
    { id: 4, nombre: "Servicio 4", precio: 4000 },
    { id: 5, nombre: "Servicio 5", precio: 5000 },
  ]);

  return (
    <div className="App">
      <h2>Rutas con BrowserRouter</h2>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/productos"
            element={<Productos productos={productos} />}
          />
          <Route
            path="/productos/:id"
            element={<ProductoDetalle productos={productos} />}
          />
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<ServiciosHome />} />
            <Route path="garantia" element={<ServiciosGarantia />} />
            <Route
              path="lista"
              element={<ServiciosLista servicios={servicios} />}
            />
            <Route
              path=":id"
              element={
                <>
                  <ServiciosLista servicios={servicios} />
                  <ServicioDetalle servicios={servicios} />
                </>
              }
            />
            <Route path="politicas" element={<ServiciosPoliticas />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <hr />
      <h2>Rutas con HashRouter</h2>
      {/* <HashRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/productos"
            element={<Productos productos={productos} />}
          />
          <Route
            path="/productos/:id"
            element={<ProductoDetalle productos={productos} />}
          />
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<ServiciosHome />} />
            <Route path="garantia" element={<ServiciosGarantia />} />
            <Route
              path="lista"
              element={<ServiciosLista servicios={servicios} />}
            />
            <Route
              path=":id"
              element={
                <>
                  <ServiciosLista servicios={servicios} />
                  <ServicioDetalle servicios={servicios} />
                </>
              }
            />
            <Route path="politicas" element={<ServiciosPoliticas />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter> */}
    </div>
  );
}

export default App;

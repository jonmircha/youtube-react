import "./App.css";
import ProductsList from "./components/ProductsList";
import UsersList from "./components/UsersList";

function App() {
  return (
    <>
      <h1>Vite + React + Redux Toolkit</h1>
      <UsersList />
      <ProductsList />
    </>
  );
}

export default App;

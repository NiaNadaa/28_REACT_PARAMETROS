import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");

  function Saludar() {
    return <p>Bienvenido {useParams().nombre}</p>;
  }

  return (
    <BrowserRouter>
      <input
        type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
      />
      <Link to={"/saludo/" + nombre}>Saludar</Link>
      <Routes>
        <Route path="/saludo/:nombre" element={<Saludar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);

  function Operaciones() {
    let numero1 = parseInt(useParams().numero1);
    let numero2 = parseInt(useParams().numero2);
    return (
      <>
        <h2>Sumado:</h2> <p>{numero1 + numero2}</p>
        <h2>Restadp:</h2> <p>{numero1 - numero2}</p>
        <h2>Multiplicado:</h2> <p>{numero1 * numero2}</p>
        <h2>Divididido:</h2> <p>{numero1 / numero2}</p>
        <h2>Resto:</h2> <p>{numero1 % numero2}</p>

        <Link to="/">Atras</Link>
        <button onClick={() => {setNumero1(0);setNumero2(0);}}>
          Reiniciar
        </button>
      </>
    );
  }

  return (
    <BrowserRouter>
      <div>
        <div>
          <button onClick={() => setNumero1(numero1 + 1)}>+</button>
          <h1>{numero1}</h1>
          <button onClick={() => setNumero1(numero1 - 1)}>-</button>
        </div>
        <div>
          <button onClick={() => setNumero2(numero2 + 1)}>+</button>
          <h1>{numero2}</h1>
          <button onClick={() => setNumero2(numero2 - 1)}>-</button>
        </div>
      </div>
      <Link to={`/operaciones/${numero1}/${numero2}`}>Operaciones</Link>
      <Routes>
        <Route path="/operaciones/:numero1/:numero2" element={<Operaciones />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

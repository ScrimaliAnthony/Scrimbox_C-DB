import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Connexion } from "./pages/Connexion";
import { Categorie } from './pages/Categorie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/connexion' element={<Connexion/>} />
        <Route path='/' element={<Categorie/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
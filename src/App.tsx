import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from "./Presentation/Views/Pokemon/List/PokemonList";
import PokemonDetail from "./Presentation/Views/Pokemon/Detail/PokemonDetail";

function App() {
  return (
    <div className="mt-8 mx-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

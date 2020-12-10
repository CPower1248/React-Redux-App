import './App.css';
import pokemon_logo from "./images/pokemon_logo.png"

import PokemonList from "./components/PokemonList"

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={pokemon_logo} alt="Pokemon Logo" />
      </header>
      <PokemonList />
    </div>
  );
}

export default App;

import './App.css';

import PokemonList from "./components/PokemonList"

function App() {
  return (
    <div className="App">
      <div className="title-container">
        <span>-React Redux App-</span>
        <h1>Pokemon API</h1>
      </div>
      <PokemonList />
    </div>
  );
}

export default App;

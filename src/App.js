import { useEffect, useState } from 'react';
import Pokemonn from './components/Pokemonn';
import './App.css';
import {pokemon} from './components/Data'

function App() {

  const [pokes, setPokes] = useState([]);
  const [loadPoke, setLoadPoke] = useState();

  const getAllPokemons = async () => {
    const res = await fetch (loadPoke)
    const data = await res.json()
    setLoadPoke(data.next)

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch ()
        const data = await res.json();
        setPokes(currentList => [...currentList, data])
      })
    }
   createPokemonObject(data.result)
   await console.log(pokes)
  }

  useEffect (() => {
    getAllPokemons()
  })

  return (
    <div>
     <h1>Kingdom of Pokemons.</h1>
     <div>
      <div>
        {pokes.map((pokemons,index) =>
          <Pokemonn 
            id = {pokemon.id}
            name = {pokemon.name}
            image = {pokemon.imageUrl}
            type = {pokemon.type[0].type.name}
            key = {index}
            height = {pokemon.height}
            weight = {pokemon.weight}
            stat1 = {pokemon.stats[0].stat.name}
            stat2 = {pokemon.stats[1].stat.name}
            stat3 = {pokemon.stats[2].stat.name}
            stat4 = {pokemon.stats[3].stat.name}
            stat5 = {pokemon.stats[4].stat.name}
            stat6 = {pokemon.stats[5].stat.name}

            bs1 = {pokemon.stats[0].base_stat}
            bs2 = {pokemon.stats[1].base_stat}
            bs3 = {pokemon.stats[2].base_stat}
            bs4 = {pokemon.stats[3].base_stat}
            bs5 = {pokemon.stats[4].base_stat}
            bs6 = {pokemon.stats[5].base_stat}

          />
        )}
      </div>
       <button onClick={() => getAllPokemons()}>more pokemonss</button>
     </div>
    
    </div>
  );
}

export default App;

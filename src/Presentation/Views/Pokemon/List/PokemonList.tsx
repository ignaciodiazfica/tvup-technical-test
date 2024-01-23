/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import DI from "../../../../DI/ioc";
import { useEffect } from "react";
import { Button } from "../../../components/Button";
import { Pokemon } from "../../../../Domain/interfaces/Pokemon/IPokemon";
export default function PokemonList() {
  let navigate = useNavigate();

  const { pokemons, getPokemons } = DI.resolve("PokemonListViewModel");

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="flex flex-wrap gap-10 sm:gap-1">
      {pokemons.map((pokemon: Pokemon) => (
        <div key={pokemon.id} className="w-1/4 p-4 mx-4">
          <Button text={`${pokemon.id} - ${pokemon.name}`} onClick={() => navigate(`/${pokemon.id}`)} />
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";
import { IGetPokemonsUseCase } from "../../../../Domain/UseCase/Pokemon/GetPokemons";
import { Pokemon } from "../../../../Domain/interfaces/Pokemon/IPokemon";

interface Props {
  GetPokemonsUseCase: IGetPokemonsUseCase;
}

export default function PokemonListViewModel({ GetPokemonsUseCase }: Props) {
  const [error, setError] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function getPokemons(): Promise<void> {
    const { result, error } = await GetPokemonsUseCase.execute();
    setError(error ?? "");
    setPokemons(result as Pokemon[]);
  }

  return {
    pokemons,
    error,
    getPokemons,
  };
}

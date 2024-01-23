import { useState } from "react";
import { IGetPokemonUseCase } from "../../../../Domain/UseCase/Pokemon/GetPokemon";
import { PokemonDetail } from "../../../../Domain/interfaces/Pokemon/IPokemonDetail";

interface Props {
  GetPokemonUseCase: IGetPokemonUseCase;
}

export default function PokemonDetailViewModel({ GetPokemonUseCase }: Props) {
  const [error, setError] = useState("");
  const [values, setValues] = useState<PokemonDetail>({
    id: 0,
    name: "",
    image: "",
    abilities: [],
  });

  async function getPokemon(id: number) {
    const { result, error } = await GetPokemonUseCase.execute(id);
    setError(error ?? ""); 
    setValues({ ...result } as PokemonDetail);
  }

  return {
    error,
    getPokemon,
    ...values,
  };
}

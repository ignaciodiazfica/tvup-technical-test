import { IPokemonRepository } from "../../../Data/Repository/PokemonRepository";
import { Response } from "../../interfaces/Base/IResponse"; 

export interface IGetPokemonsUseCase {
  execute(): Promise<Response>;
}
interface Props {
  PokemonRepository: IPokemonRepository;
}
export function GetPokemonsUseCase({ PokemonRepository }: Props) {
  return {
    async execute(): Promise<Response> {
      const { result, error } = await PokemonRepository.getPokemons();
      return { result, error };
    },
  };
}

import { IPokemonRepository } from "../../../Data/Repository/PokemonRepository";
import { Response } from "../../interfaces/Base/IResponse"; 

export interface IGetPokemonsUseCase {
  execute(limit: number, offset: number): Promise<Response>;
}
interface Props {
  PokemonRepository: IPokemonRepository;
}
export function GetPokemonsUseCase({ PokemonRepository }: Props) {
  return {
    async execute(limit: number, offset: number): Promise<Response> {
      const { result, error } = await PokemonRepository.getPokemons(limit, offset);
      return { result, error };
    },
  };
}

import { IPokemonApiDataSource } from "../DataSource/PokemonApiDataSource";
import { Response } from "../../Domain/interfaces/Base/IResponse";
interface Props {
  PokemonDataSource: IPokemonApiDataSource;
}

export interface IPokemonRepository {
  getPokemons(): Promise<Response>;
  getPokemon(id: number): Promise<Response>;
}

export function PokemonRepository({ PokemonDataSource }: Props) {
  return {
    async getPokemons(): Promise<Response> {
      const { result, error } = await PokemonDataSource.getAll();
      return { result, error };
    },
    async getPokemon(id: number): Promise<Response> {
        const { result, error } = await PokemonDataSource.getOne(id);
        return { result, error };
    }
  };
}

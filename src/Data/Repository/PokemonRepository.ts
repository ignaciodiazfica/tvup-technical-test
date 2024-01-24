import { IPokemonApiDataSource } from "../DataSource/PokemonApiDataSource";
import { Response } from "../../Domain/interfaces/Base/IResponse";
interface Props {
  PokemonDataSource: IPokemonApiDataSource;
}

export interface IPokemonRepository {
  getPokemons(limit:number, offset: number): Promise<Response>;
  getPokemon(id: number): Promise<Response>;
}

export function PokemonRepository({ PokemonDataSource }: Props) {
  return {
    async getPokemons(limit:number, offset: number): Promise<Response> {
      const { result, error } = await PokemonDataSource.getAll(limit, offset);
      return { result, error };
    },
    async getPokemon(id: number): Promise<Response> {
        const { result, error } = await PokemonDataSource.getOne(id);
        return { result, error };
    }
  };
}

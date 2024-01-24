import { GetAllResponse } from "../../../Domain/interfaces/Pokemon/IGetAllResponse";
import { Pokemon } from "../../../Domain/interfaces/Pokemon/IPokemon";

export function PokemonsMapper(response: GetAllResponse): Pokemon[]{
    let pokemons: Pokemon[] = response.data.results.map((pokemon, index) => {
        const urlParts = pokemon.url.split("/");
        const id = parseInt(urlParts[urlParts.length - 2]);
        response.data.results[index].id = id;
        return {
            id: id,
            name: pokemon.name,
            url: pokemon.url,
            next: response.data.next,
            previous: response.data.previous,
        }
      });
      return pokemons;
}
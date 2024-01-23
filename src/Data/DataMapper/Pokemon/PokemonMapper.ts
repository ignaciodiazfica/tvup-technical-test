import { GetOneResponse } from "../../../Domain/interfaces/Pokemon/IGetOneResponse";
import { PokemonDetail } from "../../../Domain/interfaces/Pokemon/IPokemonDetail";

export function PokemonMapper(response: GetOneResponse): PokemonDetail {
    let pokemon: PokemonDetail = {
        name: response.data.name,
        image: response.data.sprites.other.home.front_default,
        abilities: response.data.abilities,
    }
    return pokemon;
}
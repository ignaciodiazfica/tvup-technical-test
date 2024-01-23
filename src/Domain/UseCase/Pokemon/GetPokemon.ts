import { IPokemonRepository } from "../../../Data/Repository/PokemonRepository";
import {  Response } from "../../interfaces/Base/IResponse"

export interface IGetPokemonUseCase {
    execute(id: number): Promise<Response>;
}
interface Props{
    PokemonRepository: IPokemonRepository;
}
export function GetPokemonUseCase({ PokemonRepository }: Props){
    return {
        async execute(id: number) : Promise<Response> {
            const { result, error} = await PokemonRepository.getPokemon(id);
            return { result, error };
        }
    }
}
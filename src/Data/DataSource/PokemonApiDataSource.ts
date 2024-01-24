import axios from "axios";
import { API_URL } from "../../Domain/Constants/api";
import { GetAllResponse } from "../../Domain/interfaces/Pokemon/IGetAllResponse";
import { GetOneResponse } from "../../Domain/interfaces/Pokemon/IGetOneResponse";
import { PokemonDetail } from "../../Domain/interfaces/Pokemon/IPokemonDetail";
import { PokemonsMapper, PokemonMapper } from "../DataMapper/Pokemon";
import { Response } from "../../Domain/interfaces/Base/IResponse";
export interface IPokemonApiDataSource {
  getAll(limit: number, offset: number): Promise<Response>;
  getOne(id: number): Promise<Response>;
}

export interface GetAllRequest {
  limit?: number;
  offset?: number;
}
export async function getAll(limit = 10, offset = 0): Promise<Response> {
  let response: Response = { result: null, error: null };
  try {
    const data: GetAllResponse = await axios.get(`${API_URL}?limit=${limit}&offset=${offset}`);
    const pokemons = PokemonsMapper(data);
    response = { result: pokemons, error: null };
  } catch (err) {
    if (err instanceof Error) {
      response = { result: null, error: err.message };
    }
  }
  return Promise.resolve(response);
}

export async function getOne(id: number): Promise<Response> {
  let response: Response = { result: null, error: null };
  try {
    const pokemonData: GetOneResponse = await axios.get(`${API_URL}/${id}`);
    const pokemon: PokemonDetail = PokemonMapper(pokemonData);
    response = { result: pokemon, error: null };
  } catch (err) {
    if (err instanceof Error) {
      response = { result: null, error: err.message };
    }
  }
  return Promise.resolve(response);
}

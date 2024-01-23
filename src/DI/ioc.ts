import { asFunction, asValue, createContainer } from "awilix";
import { PokemonRepository } from "../Data/Repository/PokemonRepository";
import * as PokemonApiDataSource from "../Data/DataSource/PokemonApiDataSource";
import { GetPokemonUseCase } from "../Domain/UseCase/Pokemon/GetPokemon";
import { GetPokemonsUseCase } from "../Domain/UseCase/Pokemon/GetPokemons";
import PokemonDetailViewModel from "../Presentation/Views/Pokemon/Detail/ViewModel";
import PokemonListViewModel from "../Presentation/Views/Pokemon/List/ViewModel";
const container = createContainer();

container.register({
  PokemonRepository: asFunction(PokemonRepository),
  PokemonDataSource: asValue(PokemonApiDataSource),
  GetPokemonUseCase: asFunction(GetPokemonUseCase),
  GetPokemonsUseCase: asFunction(GetPokemonsUseCase),
  PokemonDetailViewModel: asFunction(PokemonDetailViewModel),
  PokemonListViewModel: asFunction(PokemonListViewModel),
});

export default container;

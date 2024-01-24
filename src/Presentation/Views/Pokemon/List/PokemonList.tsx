/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import DI from "../../../../DI/ioc";
import { useEffect, useState } from "react";
import { ButtonGroup } from "../../../components/ButtonGroup";
import { Image } from "../../../components/Image";
import { IButton } from "../../../../Domain/interfaces/Base/IButton";

export default function PokemonList() {
  const [offset, setOffset] = useState(0);
  const [pokemonsList, setPokemonsList] = useState([]) as any[];
  const navigate = useNavigate();
  const { pokemons, getPokemons } = DI.resolve("PokemonListViewModel");
  const limit = 10;

  useEffect(() => {
    getPokemons(limit, offset);
    setPokemonsList(pokemons);
  }, [limit, offset]);

  useEffect(() => {
    let list: IButton[] = pokemons.map((element: any) => {
      return {
        text: `${element.id} - ${element.name}`,
        onClick: () => handleClick(element.id),
        type: "info",
      };
    });
    setPokemonsList(list);
  }, [pokemons]);

  const handleClick = (id: number) => {
    navigate(`/pokemon/${id}`);
  };

  const handleNext = () => {
    setOffset(offset + limit);
  };
  const handlePrev = () => {
    setOffset(offset - limit);
  };

  const ActionButtons: IButton[] = [
    {
      text: "Anterior",
      onClick: handlePrev,
      type: "primary",
      disabled: offset === 0,
    },
    {
      text: "Siguiente",
      onClick: handleNext,
      type: "primary",
    },
  ];
  return (
    <div className="flex text-center flex-col">
      <div className="flex justify-center">
        <Image
          src="pokedex-icon.png"
          alt="pokedex-icon"
          width="300"
          height="300"
        />
      </div>
      <h1 className="text-3xl font-bold py-4">Pokedex</h1>
      <ButtonGroup
        array={pokemonsList}
        className="flex justify-center flex-wrap gap-12 sm:gap-1"
      />
      <ButtonGroup array={ActionButtons} className="flex justify-center gap-8" />
    </div>
  );
}

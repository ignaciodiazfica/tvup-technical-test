/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import DI from "../../../../DI/ioc";
import { useEffect } from "react";
import { Button } from "../../../components/Button";
import { Image } from "../../../components/Image";

export default function PokemonDetail() {
  let navigate = useNavigate();
  let { id } = useParams();

  const { name, abilities, image, getPokemon } = DI.resolve(
    "PokemonDetailViewModel"
  );

  useEffect(() => {
    getPokemon(id);
  }, []);
  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold pb-5">{name}</h1>
            Habilidades:
            <ul>
              {abilities.map((ability: any) => (
                <li className="mt-2" key={`key-${ability.ability.name}`}>
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-4">
          <Image src={image} alt={name} size={48} />
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <Button text="Volver" onClick={() => navigate("/")} />
      </div>
    </>
  );
}

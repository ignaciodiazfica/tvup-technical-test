/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import DI from "../../../../DI/ioc";
import { useEffect } from "react";
import { Image } from "../../../components/Image";
import { AbilitiesList } from "../../../components/AbilitiesList";
import { ButtonGroup } from "../../../components/ButtonGroup";
import { IButton } from "../../../../Domain/interfaces/Base/IButton";

export default function PokemonDetail() {
  let navigate = useNavigate();
  let { id } = useParams();

  const { name, abilities, image, getPokemon } = DI.resolve(
    "PokemonDetailViewModel"
  );

  useEffect(() => {
    getPokemon(id);
  }, [id]);

  const ActionButtons: IButton[] = [
    {
      text: "Anterior",
      onClick: () => navigate(`/pokemon/${id ? parseInt(id) - 1 : 1}`),
      type: "secondary",
      disabled: id === "1",
    },
    {
      text: "Volver",
      onClick: () => navigate("/"),
      type: "primary",
    },
    {
      text: "Siguiente",
      onClick: () => navigate(`/pokemon/${id ? parseInt(id) + 1 : 2}`),
      type: "secondary",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold pb-5">{name}</h1>
            <AbilitiesList array={abilities} />
          </div>
        </div>
        <div className="mx-4">
          <Image src={image} alt={name} size={48} />
        </div>
      </div>
      <ButtonGroup
        array={ActionButtons}
        className="flex items-center justify-center mt-6 gap-3"
      />
    </>
  );
}

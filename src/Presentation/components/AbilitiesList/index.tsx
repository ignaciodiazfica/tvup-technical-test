interface Props {
  array: any[];
}

export function AbilitiesList({ array }: Props) {
  return (
    <>
      Habilidades:
      <ul>
        {array.map((element: any, key: number) => (
          <li className="mt-2" key={`key-${key}`}>
            {element.ability.name}
          </li>
        ))}
      </ul>
    </>
  );
}

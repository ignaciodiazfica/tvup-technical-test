import { ComponentPropsWithoutRef } from "react";
import { Button } from "../Button";


interface Props extends ComponentPropsWithoutRef<"div"> {
  array: any[];
}

export function ButtonGroup({ array, ...values }: Props) {
  return (
    <div {...values}>
      {array.map((element: any) => (
        <div key={element.id} className="w-1/6 mx-4 p-8">
          <Button
            text={element.text}
            onClick={element.onClick}
            type={element.type}
            disabled={element.disabled}
          />
        </div>
      ))}
    </div>
  );
}

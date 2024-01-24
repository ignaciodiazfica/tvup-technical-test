import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"img"> {
  src: string;
  alt: string;
  size?: number;
}
export function Image({ src, alt, size = 48, ...values }: Props) {
  return (
    <img src={src} alt={alt} className={`w-${size} h-${size}`} {...values} />
  );
}

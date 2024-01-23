interface Props {
  src: string;
  alt: string;
  size: number;
}
export function Image({ src, alt, size }: Props) {
  return <img src={src} alt={alt}  className={`w-${size} h-${size}`} />;
}

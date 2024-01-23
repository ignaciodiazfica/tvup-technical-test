interface Props {
  text: string;
  onClick: () => void;
}
export function Button({ text, onClick }: Props) {
  
  return (
    <>
      <button
        className={`bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline transition duration-300`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

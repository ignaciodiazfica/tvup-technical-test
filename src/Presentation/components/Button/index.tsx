import { IButton } from "../../../Domain/interfaces/Base/IButton";

export function Button({
  text,
  onClick,
  type = "primary",
  disabled = false,
}: IButton) {
  let colorClass = "";
  switch (type) {
    case "primary":
      colorClass = "bg-green-500 hover:bg-green-700";
      break;
    case "secondary":
      colorClass = "bg-blue-500 hover:bg-blue-700";
      break;
    case "danger":
      colorClass = "bg-red-500 hover:bg-red-700";
      break;
    case "warning":
      colorClass = "bg-yellow-500 hover:bg-yellow-700";
      break;

    case "gray":
      colorClass = "bg-gray-500 hover:bg-gray-700";
      break;
    case "info":
      colorClass = "bg-indigo-500 hover:bg-indigo-700";
      break;
    default:
      colorClass = "bg-green-500 hover:bg-green-700";
      break;
  }
  return (
    <>
      <button
        className={` ${colorClass} text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline transition duration-300 disabled:bg-slate-400`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
}

import { ButtonProps } from "@/interfaces";

const sizeMap = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

export default function Button({
  title,
  size = "medium",
  shape = "rounded-md",
  onClick,
}: ButtonProps) {
  const sizeClass = sizeMap[size] || sizeMap.medium;

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClass} ${shape} hover:bg-blue-700 transition`}
    >
      {title}
    </button>
  );
}
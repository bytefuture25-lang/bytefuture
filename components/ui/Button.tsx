interface ButtonProps {
  text: string;
}

export default function Button({
  text,
}: ButtonProps) {
  return (
    <button
      className="
      px-6
      py-3
      rounded-xl
      bg-pink-500
      text-white
      font-medium
      hover:scale-105
      hover:shadow-lg
      hover:shadow-pink-500/30
      transition-all
      duration-300
      "
    >
      {text}
    </button>
  );
}
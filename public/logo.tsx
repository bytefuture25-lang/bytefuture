import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center text-white font-bold">
        B
      </div>

      <div>
        <h2 className="text-xl font-bold text-pink-500">
          ByteFuture
        </h2>

        <p className="text-xs text-zinc-500">
          Elowen Studio
        </p>
      </div>
    </Link>
  );
}
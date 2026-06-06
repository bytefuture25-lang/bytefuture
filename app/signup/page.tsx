export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div
        className="
        w-full
        max-w-md

        bg-[#161616]
        border
        border-zinc-800

        rounded-3xl
        p-10
        "
      >

        <p className="text-pink-500 uppercase tracking-[0.3em]">
          Authentication
        </p>

        <h1 className="text-4xl font-bold mt-4">
          Create Account
        </h1>

        <p className="text-zinc-400 mt-4">
          Join the ByteFuture community.
        </p>

        <form className="space-y-5 mt-10">

          <input
            type="text"
            placeholder="Full Name"
            className="
            w-full
            p-4
            rounded-xl

            bg-zinc-900
            border
            border-zinc-800
            "
          />

          <input
            type="email"
            placeholder="Email Address"
            className="
            w-full
            p-4
            rounded-xl

            bg-zinc-900
            border
            border-zinc-800
            "
          />

          <input
            type="password"
            placeholder="Password"
            className="
            w-full
            p-4
            rounded-xl

            bg-zinc-900
            border
            border-zinc-800
            "
          />

          <button
            className="
            w-full

            py-4

            rounded-xl

            bg-pink-500

            hover:scale-[1.02]
            transition
            "
          >
            Create Account
          </button>

        </form>

      </div>

    </main>
  );
}
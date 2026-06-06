export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <p className="text-pink-500 uppercase tracking-[0.3em]">
        About
      </p>

      <h1 className="text-6xl font-bold mt-4">
        About ByteFuture
      </h1>

      <p className="max-w-3xl mt-8 text-zinc-400 text-lg">
        ByteFuture is a platform dedicated to cybersecurity,
        artificial intelligence, software development and
        content creation.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-20">
        <div className="bg-[#161616] border border-zinc-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold">Cybersecurity</h3>
          <p className="mt-4 text-zinc-400">
            Ethical hacking and security learning.
          </p>
        </div>

        <div className="bg-[#161616] border border-zinc-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold">Development</h3>
          <p className="mt-4 text-zinc-400">
            Building modern websites and applications.
          </p>
        </div>

        <div className="bg-[#161616] border border-zinc-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold">AI</h3>
          <p className="mt-4 text-zinc-400">
            Exploring future technologies and automation.
          </p>
        </div>
      </div>
    </main>
  );
}
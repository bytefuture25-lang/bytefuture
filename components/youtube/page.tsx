export default function YoutubePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <p className="text-pink-500 uppercase tracking-[0.3em]">
        YouTube
      </p>

      <h1 className="text-6xl font-bold mt-4">
        Video Library
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-20">
        {[1, 2, 3, 4, 5, 6].map((video) => (
          <div
            key={video}
            className="bg-[#161616] rounded-3xl overflow-hidden"
          >
            <div className="h-48 bg-zinc-800" />

            <div className="p-6">
              <h3 className="text-xl font-bold">
                Video Title
              </h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-32">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-3xl font-bold text-pink-500">
              ByteFuture
            </h3>

            <p className="mt-4 text-zinc-400">
              Cybersecurity, AI, Development and Content Creation.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Navigation
            </h4>

            <ul className="space-y-2 text-zinc-400">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Videos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Connect
            </h4>

            <ul className="space-y-2 text-zinc-400">
              <li>YouTube</li>
              <li>Instagram</li>
              <li>Email</li>
              <li>GitHub</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 text-zinc-500">
          © 2026 ByteFuture • Powered by Elowen Studio
        </div>

      </div>

    </footer>
  );
}
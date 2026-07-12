export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="text-xl font-bold text-white">
          Aditya<span className="text-blue-500">.</span>
        </a>

        <div className="hidden items-center gap-10 text-gray-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#blog" className="transition hover:text-white">
            Blog
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="https://github.com/adityaparmar17"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-800 px-5 py-2 text-white transition hover:border-blue-500"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
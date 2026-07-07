export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="text-xl font-bold tracking-tight">
          Aditya<span className="text-blue-500">.</span>
        </a>

        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#blog" className="hover:text-white">Blog</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        <a
          href="https://github.com/"
          target="_blank"
          className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-blue-500"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-gray-500">
          © 2026 Aditya Parmar. Built with Next.js & Tailwind CSS.
        </p>

        <p className="text-sm text-gray-500">
          Building AI products and learning in public 🚀
        </p>
      </div>
    </footer>
  );
}
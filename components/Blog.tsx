const posts = [
  {
    title: "Learning AI by Building Real Projects",
    description:
      "Why I chose to learn AI through building, experimenting, and sharing my journey in public.",
    category: "AI Journey",
    date: "Coming Soon",
  },
  {
    title: "Building My First AI Product",
    description:
      "Lessons, mistakes, and challenges I faced while turning an idea into a real product.",
    category: "Building",
    date: "Coming Soon",
  },
  {
    title: "My AI Engineer Roadmap for 2027",
    description:
      "The skills, projects, and technologies I'm focusing on while working towards becoming an AI engineer.",
    category: "Roadmap",
    date: "Coming Soon",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold uppercase tracking-wider text-blue-500">
          Writing & Learning
        </p>

        <h2 className="mt-4 text-5xl font-bold md:text-6xl">
          Latest <span className="text-blue-500">Writing</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          I write about AI engineering, building real projects, mistakes, and
          everything I learn along the way.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-400">{post.category}</span>
                <span className="text-gray-500">{post.date}</span>
              </div>

              <h3 className="mt-6 text-2xl font-bold">{post.title}</h3>

              <p className="mt-4 leading-7 text-gray-400">
                {post.description}
              </p>

              <button className="mt-8 font-semibold text-blue-400 transition hover:text-blue-300">
                Read Article →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
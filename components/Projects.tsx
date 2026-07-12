import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "AI Portfolio Website",
      description:
        "A modern portfolio built with Next.js, Tailwind CSS and TypeScript.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      github: "https://github.com/adityaparmar17/aditya-portfolio",
      demo: "#",
      image: "/images/projects/portfolio.png",
      featured: true,
      status: "Completed",
    },
    {
      title: "CoachSetuX",
      description:
        "An AI-powered marketplace connecting students, mentors and coaches.",
      tech: ["React", "Supabase", "AI"],
      github: "#",
      demo: "#",
      image: "/images/projects/coachsetux.png",
      featured: false,
      status: "In Progress",
    },
    {
      title: "Yati Funnels",
      description:
        "A no-code website builder focused on business landing pages and funnels.",
      tech: ["React", "JavaScript", "Firebase"],
      github: "#",
      demo: "#",
      image: "/images/projects/yatifunnels.png",
      featured: false,
      status: "Ongoing",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-blue-500 font-semibold uppercase tracking-wider">
          My Work
        </p>

        <h2 className="mt-4 mb-6 text-5xl md:text-6xl font-bold">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <p className="max-w-2xl text-lg text-gray-400 mb-16">
          Here are some projects I've built while learning AI, Full Stack
          Development and modern web technologies.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={400}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                {project.featured && (
                  <span className="mb-4 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold">
                    ⭐ Featured
                  </span>
                )}

                <p className="text-sm text-blue-400">{project.status}</p>

                <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>

                <p className="mt-4 text-gray-400">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-blue-600 px-5 py-2 transition hover:bg-blue-700"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="rounded-lg border border-zinc-600 px-5 py-2 transition hover:border-blue-500"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import Blog from "@/components/Blog";
<Blog />

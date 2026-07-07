export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-6">
          About <span className="text-blue-500">Me</span>
        </h2>

        <p className="text-xl text-gray-400 leading-9">
          I'm <span className="text-white font-semibold">Aditya Parmar</span>,
          a BCA (AI & ML) student passionate about Artificial Intelligence,
          Full Stack Development, and building real-world AI products. My goal
          is to become one of India's top AI engineers by consistently building,
          learning, and sharing my journey publicly.
        </p>
      </div>
    </section>
  );
}
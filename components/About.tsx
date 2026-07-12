export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <p className="text-blue-500 font-semibold mb-3">
            ABOUT ME
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Building My Career
            <br />
            <span className="text-blue-500">
              One Project at a Time
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            I'm <span className="text-white font-semibold">Aditya Parmar</span>,
            a BCA (AI & ML) student passionate about Artificial Intelligence,
            Full Stack Development and solving real-world problems through
            technology.
          </p>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            My goal is to become one of India's leading AI Engineers by
            building impactful AI products, contributing to open source,
            writing technical blogs and continuously learning in public.
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-6">

          <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-2">
              🎓 Education
            </h3>

            <p className="text-gray-400">
              BCA (Artificial Intelligence & Machine Learning)
            </p>

            <p className="text-blue-400 mt-2">
              IMS Unison University
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-2">
              🚀 Current Focus
            </h3>

            <p className="text-gray-400">
              AI Engineering • Full Stack Development • Open Source •
              Building Real Projects
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-2">
              🎯 Goal
            </h3>

            <p className="text-gray-400">
              Become one of India's top AI Engineers and build AI products
              that solve real-world problems.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
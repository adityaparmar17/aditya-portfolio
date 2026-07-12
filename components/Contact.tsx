"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-5xl w-full text-center">

        <p className="text-blue-500 font-semibold tracking-widest uppercase">
          Contact
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mt-4">
          Let's Build Something
          <br />
          <span className="text-blue-500">Amazing Together</span>
        </h2>

        <p className="text-gray-400 mt-8 text-lg max-w-3xl mx-auto leading-8">
          I'm always open to internships, AI projects, freelance work,
          collaborations, and exciting opportunities.
          If you'd like to work together, feel free to reach out.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="bg-zinc-900 rounded-2xl p-6 hover:border-blue-500 border border-zinc-800 transition"
          >
            <FaEnvelope className="text-3xl text-blue-500 mb-4 mx-auto" />
            <h3 className="font-semibold">Email</h3>
          </a>

          <a
            href="https://github.com/adityaparmar17"
            target="_blank"
            className="bg-zinc-900 rounded-2xl p-6 hover:border-blue-500 border border-zinc-800 transition"
          >
            <FaGithub className="text-3xl text-blue-500 mb-4 mx-auto" />
            <h3 className="font-semibold">GitHub</h3>
          </a>

          <a
            href="https://linkedin.com/in/aditya-parmar-ai"
            target="_blank"
            className="bg-zinc-900 rounded-2xl p-6 hover:border-blue-500 border border-zinc-800 transition"
          >
            <FaLinkedin className="text-3xl text-blue-500 mb-4 mx-auto" />
            <h3 className="font-semibold">LinkedIn</h3>
          </a>

          <a
            href="/resume.pdf"
            className="bg-zinc-900 rounded-2xl p-6 hover:border-blue-500 border border-zinc-800 transition"
          >
            <FaFileDownload className="text-3xl text-blue-500 mb-4 mx-auto" />
            <h3 className="font-semibold">Resume</h3>
          </a>

        </div>

        <div className="mt-16 flex justify-center gap-6 flex-wrap">

          <a
            href="mailto:adityaparmar0002@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
          >
            Send Email
          </a>

          <a
            href="/resume.pdf"
            className="border border-zinc-700 hover:border-blue-500 px-8 py-4 rounded-xl font-semibold transition"
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}
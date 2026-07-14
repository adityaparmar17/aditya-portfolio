"use client";

"use client";

import { useState } from "react";
import { supabase } from "../src/lib/supabase";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [status, setStatus] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);
  setStatus("");

  const { error } = await supabase
    .from("contact_messages")
    .insert([
      {
        name,
        email,
        message,
      },
    ]);

  if (error) {
    console.error(error);
    setStatus("Something went wrong. Please try again.");
  } else {
    setStatus("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  }

  setLoading(false);
};
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

        <form
  onSubmit={handleSubmit}
  className="mt-16 max-w-2xl mx-auto text-left space-y-6"
>
  <div>
    <label className="block text-sm text-gray-400 mb-2">
      Name
    </label>

    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Your name"
      required
      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-400 mb-2">
      Email
    </label>

    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="your@email.com"
      required
      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition"
    />
  </div>

  <div>
    <label className="block text-sm text-gray-400 mb-2">
      Message
    </label>

    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Tell me about your project or opportunity..."
      required
      rows={5}
      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition resize-none"
    />
  </div>

  <button
    type="submit"
    disabled={loading}
    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-8 py-4 rounded-xl font-semibold transition"
  >
    {loading ? "Sending..." : "Send Message"}
  </button>

  {status && (
    <p className="text-center text-sm text-gray-300">
      {status}
    </p>
  )}
</form>
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
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl text-center"
      >
        <p className="mb-6 text-blue-400">
          🚀 AI Engineer • Student • Builder
        </p>

        <h1 className="text-6xl font-black leading-tight md:text-8xl">
          Building AI Products
        </h1>

        <h2 className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-6xl font-black text-transparent md:text-8xl">
          That Solve Real Problems
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
          I'm <span className="text-white font-semibold">Aditya Parmar</span>,
          an AI & ML student documenting my journey by building real AI
          products, sharing what I learn, and growing in public.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-700">
            View Projects →
          </button>

          <button className="rounded-xl border border-gray-700 px-8 py-4 text-lg font-semibold transition hover:border-blue-500">
            Read Blog
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-gray-400">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>
      </motion.div>
    </section>
  );
}
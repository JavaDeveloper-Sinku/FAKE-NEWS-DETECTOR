"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 ">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-300 rounded-full blur-3xl opacity-30"></div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 z-10 mt-50"
        >
          About Fake News Detector AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-700 max-w-3xl text-lg md:text-xl mb-6 z-10"
        >
          An advanced AI-powered tool to classify news articles as <span className="text-green-600 font-semibold">REAL</span> or <span className="text-red-600 font-semibold">FAKE</span>. 
          Stay informed, protect communities, and fight misinformation.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">🌟 Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "🚀 Instant Prediction", desc: "Real-time news classification with high accuracy." },
            { title: "🧠 AI-Powered", desc: "Uses HuggingFace NLP models to intelligently analyze text." },
            { title: "🌍 Verified Sources", desc: "Cross-check news articles with trusted sources using NewsAPI." },
            { title: "📊 Confidence Scores", desc: "Confidence percentage for each prediction to assess reliability." },
            { title: "💻 Easy Integration", desc: "Use via web, API, or embed in your platform easily." },
            { title: "⚡ Fast Results", desc: "Get predictions instantly with minimal delay." },
             { title: "⚡ Fast Results", desc: "Get predictions instantly with minimal delay." },
              { title: "⚡ Fast Results", desc: "Get predictions instantly with minimal delay." },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 cursor-pointer"
            >
              <h3 className="text-lg font-bold mb-3">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Developer Section */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg" // replace with your profile image
            alt="Developer"
            width={200}
            height={200}
            className="rounded-full shadow-xl border-4 border-white"
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hi, I'm Rishi Singh</h2>
          <p className="text-gray-700 mb-4">
            I developed Fake News Detector AI combining modern web development with NLP-powered AI. 
            My goal is to empower people to detect misinformation quickly and make informed decisions.
          </p>
          <p className="text-gray-700">
            Tech Stack: <span className="font-semibold">FastAPI</span>, <span className="font-semibold">Next.js</span>, <span className="font-semibold">Tailwind CSS</span>, <span className="font-semibold">HuggingFace Transformers</span>.
          </p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a href="https://github.com" className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">GitHub</a>
            <a href="https://linkedin.com" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">LinkedIn</a>
            <a href="https://twitter.com" className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-300 transition">Twitter</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Try it Yourself!</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Experience the power of Fake News Detector AI and check news articles instantly.
        </p>
        <a href="/predict_2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            🚀 Predict News Now
          </motion.button>
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-6 md:px-16 py-10 mt-12 text-center">
        <p>© {new Date().getFullYear()} Fake News Detector AI. All rights reserved.</p>
      </footer>
    </main>
  );
}

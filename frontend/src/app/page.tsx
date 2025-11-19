"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Cpu,
  BarChart3,
  Users,
  ShieldCheck,
  Globe,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* NAV (small sticky header to match site) */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold">Fake News Detector AI</h1>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <a href="/" className="hover:text-purple-300 transition">Home</a>
          
            <a href="/news-detector" className="hover:text-purple-300 transition">Predict</a>
            <a href="/contact" className="hover:text-purple-300 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-blue-600/20 rounded-full blur-3xl"></div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
        >
          About Fake News Detector AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-gray-200 max-w-3xl mt-6 text-lg md:text-xl"
        >
          Ek modern AI-powered platform jo news articles ko <span className="text-green-400 font-semibold">REAL</span> ya <span className="text-red-400 font-semibold">FAKE</span> classify karta hai — fast, explainable, aur production-ready.
        </motion.p>

        <div className="mt-8 flex gap-4">
          <a
            href="/news-detector"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg font-semibold"
          >
            🚀 Try Prediction
          </a>
          <a
            href="#team"
            className="inline-block px-6 py-3 rounded-lg bg-white/10 border border-white/10 hover:bg-white/5 transition"
          >
            Meet the Creator
          </a>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white/90">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/3 border border-white/5 backdrop-blur-md shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-400">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Advanced NLP Model</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Transformer-based models (fine-tuned) for deep semantic understanding and contextual detection.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/3 border border-white/5 backdrop-blur-md shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Confidence & Explainability</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Har prediction ke saath confidence score aur short explanation (key phrases / signals) diya jata hai.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/3 border border-white/5 backdrop-blur-md shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Trusted Source Cross-Check</h3>
            </div>
            <p className="text-gray-300 text-sm">
              News sources ko cross-check kar ke additional signal gather kiya jata hai (optional API integration).
            </p>
          </motion.div>
        </div>
      </section>

      {/* DETAILS / WHY IT MATTERS */}
      <section className="bg-black/10 border-t border-white/5 py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why this matters</h3>
            <p className="text-gray-300 mb-4">
              Misinformation communities ko damage kar sakti hai — accurate tools se log informed decisions le sakte hain.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>• Reduce viral falsehoods</li>
              <li>• Help journalists & fact-checkers</li>
              <li>• Improve platform moderation</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/3 border border-white/5 backdrop-blur-md shadow-lg">
            <h4 className="font-semibold mb-3">Deployment & Integration</h4>
            <p className="text-gray-300 text-sm mb-4">
              API-based endpoints, embeddable widget, and a simple dashboard for monitoring trends and batch checks.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-md bg-gradient-to-r from-purple-500 to-blue-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Privacy-first</div>
                  <div className="text-xs text-gray-300">Minimal logging, optional on-prem deployment.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Collaborative</div>
                  <div className="text-xs text-gray-300">Team accounts for moderation & review workflows.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM / DEVELOPER */}
      <section id="team" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Meet the Creator</h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 p-1 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Rishi Singh"
                fill
                sizes="(max-width: 768px) 200px, 300px"
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-2">Rishi Singh</h3>
            <p className="text-gray-300 mb-4">
              Full-stack developer & ML enthusiast. I build tools which make information reliable and accessible.
            </p>

            <p className="text-gray-300 mb-4">
              <span className="font-semibold">Stack:</span> Next.js · FastAPI · Tailwind CSS · HuggingFace · Docker · PostgreSQL
            </p>

            <div className="flex gap-3">
              <a className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition" href="https://github.com">
                GitHub
              </a>
              <a className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition" href="https://linkedin.com">
                LinkedIn
              </a>
              <a className="px-4 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-300 transition" href="https://twitter.com">
                Twitter
              </a>
            </div>
          </div>
         </div>


         


      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center p-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/3 border border-white/5 backdrop-blur-md shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Ready to test an article?</h3>
          <p className="text-gray-300 mb-6">Paste the article or URL and get an instant prediction with explanation.</p>
          <a
            href="/news-detector"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 font-semibold shadow-lg"
          >
            🚀 Predict Now
          </a>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer className="bg-black/20 border-t border-white/5 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-2">Fake News Detector AI</h4>
            <p className="text-sm text-gray-300">Helping people fight misinformation with AI.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/news-detector" className="hover:text-white">Predict</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-300">hello@fakenews.ai</p>
            <p className="text-sm text-gray-400 mt-3">© {new Date().getFullYear()} Fake News Detector AI</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

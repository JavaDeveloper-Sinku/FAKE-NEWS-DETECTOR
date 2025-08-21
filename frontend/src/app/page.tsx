"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-lg font-bold text-blue-600">Fake News Detector AI</h1>
        <div className="flex gap-4 text-sm">
          <Link href="/about" className="hover:text-blue-600 font-medium">
            About
          </Link>
          <Link href="/predict_2" className="hover:text-blue-600 font-medium">
            Predict
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200 rounded-full blur-3xl opacity-40"></div>
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 relative"
        >
          Detect Fake News Instantly ⚡
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base md:text-lg text-gray-600 max-w-2xl mb-6 relative"
        >
          Our AI-powered tool helps you check if a news article is{" "}
          <b className="text-green-600">REAL</b> or{" "}
          <b className="text-red-600">FAKE</b> with high accuracy. Stay
          informed, stay safe!
        </motion.p>

        <div className="flex gap-4 relative">
          <Link href="/predict_2">
            <Button className="px-6 py-2 text-base rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
              🚀 Try Prediction
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              className="px-6 py-2 text-base rounded-xl shadow-md"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-6 md:px-16 py-16 bg-white">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">
          🧠 How Fake News Detector AI Works
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400"></div>

          {/* Step 1 */}
          <div className="mb-12 flex justify-start">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-lg font-bold text-blue-600">
                📝 Text Preprocessing
              </h3>
              <p className="text-gray-600 text-sm">
                Cleans text by removing stop words, symbols, and noise for better AI input.
              </p>
            </div>
            <div className="w-1/2 flex items-center">
              <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-12 flex justify-end">
            <div className="w-1/2 flex items-center justify-end">
              <div className="w-5 h-5 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-lg font-bold text-green-600">
                🔎 Feature Extraction
              </h3>
              <p className="text-gray-600 text-sm">
                Extracts patterns like word frequency, writing style, and sentiment.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-12 flex justify-start">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-lg font-bold text-purple-600">
                🤖 Model Prediction
              </h3>
              <p className="text-gray-600 text-sm">
                AI model predicts whether the article is <b>REAL</b> or <b>FAKE</b>.
              </p>
            </div>
            <div className="w-1/2 flex items-center">
              <div className="w-5 h-5 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-12 flex justify-end">
            <div className="w-1/2 flex items-center justify-end">
              <div className="w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-lg font-bold text-orange-500">
                📊 Confidence Score
              </h3>
              <p className="text-gray-600 text-sm">
                Provides a confidence percentage along with the prediction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 px-6 md:px-16 py-16">
        {[
          {
            title: "🔍 Accurate Detection",
            desc: "Trained on thousands of news articles for maximum accuracy.",
          },
          {
            title: "⚡ Fast Results",
            desc: "Instant predictions with one click. No delays, only results.",
          },
          {
            title: "🌍 Stay Informed",
            desc: "Verify news before sharing & stop misinformation.",
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-6 md:px-16 py-10 mt-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Fake News Detector AI
            </h3>
            <p className="text-sm text-gray-400">
              Advanced AI-powered fake news detection to protect communities.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:text-white">Features</Link></li>
              <li><Link href="/api" className="hover:text-white">API</Link></li>
              <li><Link href="/browser" className="hover:text-white">Browser Extension</Link></li>
              <li><Link href="/mobile" className="hover:text-white">Mobile App</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
              <li><Link href="/research" className="hover:text-white">Research</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Fake News Detector AI. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-3">
            <Link href="https://twitter.com" className="hover:text-white">Twitter</Link>
            <Link href="https://linkedin.com" className="hover:text-white">LinkedIn</Link>
            <Link href="https://github.com" className="hover:text-white">GitHub</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

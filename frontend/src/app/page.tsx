"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Newspaper, AlertCircle, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold text-blue-600 flex items-center gap-2">
          <Newspaper className="w-6 h-6" /> Fake News Detector AI
        </h1>
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-blue-600 font-medium">
            About
          </Link>
          <Link href="/news-detector" className="hover:text-blue-600 font-medium">
            Predict
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 overflow-hidden">
        {/* Background blobs */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl"
        />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Detect Fake News Instantly ⚡
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-700 md:text-lg max-w-2xl mb-8"
        >
          Verify news articles in real-time with AI. Know if a news is{" "}
          <CheckCircle className="inline w-5 h-5 text-green-500 mx-1" /> REAL or{" "}
          <AlertCircle className="inline w-5 h-5 text-red-500 mx-1" /> FAKE instantly!
        </motion.p>

        <div className="flex gap-4">
          <Link href="/news-detector">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              🚀 Try Prediction
            </motion.button>
          </Link>
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-xl shadow hover:shadow-md transition"
            >
              Learn More
            </motion.button>
          </Link>
        </div>

        {/* Scrolling ticker */}
        <div className="absolute bottom-0 w-full py-2 bg-gray-100 overflow-hidden">
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="whitespace-nowrap text-gray-700 text-sm md:text-base font-medium"
          >
            🔔 Breaking: AI detects fake news instantly! &nbsp;&nbsp;&nbsp; 🌍 Stay informed, share wisely! &nbsp;&nbsp;&nbsp; ⚡ Fast & Accurate Fake News Detection!
          </motion.div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center text-center py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-300 rounded-full blur-3xl opacity-30"></div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 z-10 mt-10"
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




      {/* Timeline / How it Works Section */}
      <section className="px-6 md:px-16 py-16 bg-white">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">
          🧠 How Fake News Detector AI Works
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400"></div>

          {/* Steps */}
          {[
            { title: "📝 Text Preprocessing", desc: "Cleans text for better AI input.", color: "blue-600", side: "left" },
            { title: "🔎 Feature Extraction", desc: "Extracts patterns like style & sentiment.", color: "green-600", side: "right" },
            { title: "🤖 Model Prediction", desc: "AI predicts REAL or FAKE news.", color: "purple-600", side: "left" },
            { title: "📊 Confidence Score", desc: "Provides prediction confidence.", color: "orange-500", side: "right" },
          ].map((step, i) => (
            <div key={i} className={`mb-12 flex justify-${step.side === "left" ? "start" : "end"}`}>
              {step.side === "left" && (
                <div className="w-1/2 pr-8 text-right">
                  <h3 className={`text-lg font-bold text-${step.color}`}>{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              )}
              <div className="w-1/2 flex items-center justify-center">
                <div className={`w-5 h-5 rounded-full bg-${step.color} border-4 border-white shadow-lg`}></div>
              </div>
              {step.side === "right" && (
                <div className="w-1/2 pl-8 text-left">
                  <h3 className={`text-lg font-bold text-${step.color}`}>{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 px-6 md:px-16 py-16">
        {[
          { title: "🔍 Accurate Detection", desc: "Trained on thousands of articles for accuracy." },
          { title: "⚡ Fast Results", desc: "Get predictions instantly." },
          { title: "🌍 Stay Informed", desc: "Verify news before sharing." },
           { title: "🌍 Stay Informed", desc: "Verify news before sharing." },
            { title: "🌍 Stay Informed", desc: "Verify news before sharing." },
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
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Fake News Detector AI</h3>
            <p className="text-sm text-gray-400">Advanced AI-powered fake news detection.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:text-white">Features</Link></li>
              <li><Link href="/api" className="hover:text-white">API</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Fake News Detector AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

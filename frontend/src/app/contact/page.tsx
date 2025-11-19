"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 flex flex-col items-center justify-center p-8 text-white">
      
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
      >
        Get in Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center max-w-2xl mb-12 text-white/80"
      >
        Have questions or suggestions? Send us a message and we'll get back to you promptly.
      </motion.p>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl">

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
          className="flex-1 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition"
          />

          <button
            type="submit"
            className="mt-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition flex items-center justify-center gap-2"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-3 text-green-300 font-semibold text-center">
              ✅ Your message has been sent!
            </p>
          )}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex-1 flex flex-col gap-6"
        >
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-lg flex items-center gap-4">
            <MapPin className="w-6 h-6 text-yellow-300" />
            <p>123 AI Street, Tech City, India</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-lg flex items-center gap-4">
            <Phone className="w-6 h-6 text-green-300" />
            <p>+91 98765 43210</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-lg flex items-center gap-4">
            <Mail className="w-6 h-6 text-blue-300" />
            <p>contact@fakenewsai.com</p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}

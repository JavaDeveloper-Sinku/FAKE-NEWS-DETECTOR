"use client";

import { useState } from "react";
import { Sparkles, FileText, ShieldCheck, AlertTriangle } from "lucide-react";
import "./predictPage.css"; 

type PredictionResult = {
  ai_prediction: string;
  confidence: number;
  verified_sources: { source: string; title: string; url: string }[];
  final_verification: string;
};

export default function PredictPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<PredictionResult | null>(null);

  const handlePredict = async () => {
    const res = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center p-8 animate-gradient">
      <div className="flex w-full max-w-6xl bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/20">

        {/* LEFT SIDE */}
        <div className="w-2/3 pr-8">
          <h1 className="text-4xl font-extrabold text-center drop-shadow-xl animate-fade-in flex items-center justify-center gap-3">
            <Sparkles className="w-7 h-7 text-yellow-300" />
            Fake News Detector
          </h1>

          {/* Input Box */}
          <div className="mt-6">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste news text here..."
              className="w-full bg-white/20 border border-white/30 rounded-xl p-4 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:outline-none transition-all duration-300 focus:scale-[1.02]"
              rows={5}
            />
          </div>

          {/* Predict Button */}
          <button
            onClick={handlePredict}
            className="mt-5 w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white font-semibold text-lg shadow-lg hover:scale-105 transition flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" /> Predict
          </button>

          {/* Result */}
          {result && (
            <div className="mt-8 animate-fade-in delay-200">
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-6 h-6" /> AI Prediction
              </h2>

              {/* Confidence Bar */}
              <div className="w-full bg-white/20 rounded-xl h-12 relative overflow-hidden">
                <div
                  className={`
                      h-12 flex items-center justify-center text-white font-bold text-lg transition-all duration-700
                      ${
                        result.ai_prediction === "REAL"
                          ? "bg-green-500 shadow-[0_0_20px_3px_rgba(34,197,94,0.8)]"
                          : "bg-red-500 shadow-[0_0_20px_3px_rgba(239,68,68,0.8)]"
                      }
                    `}
                  style={{ width: `${(result.confidence * 100).toFixed(1)}%` }}
                >
                  {(result.confidence * 100).toFixed(1)}%
                </div>
              </div>

              {/* Text Prediction */}
              <p className="mt-4 text-lg">
                <strong>Prediction:</strong>{" "}
                {result.ai_prediction === "REAL" ? (
                  <span className="text-green-300 font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6" /> REAL
                  </span>
                ) : (
                  <span className="text-red-300 font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" /> FAKE
                  </span>
                )}
              </p>

              {/* Verified Sources */}
              <h2 className="mt-6 text-lg font-semibold">Verified Sources</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                {result.verified_sources.length === 0 ? (
                  <p className="text-white/80">No sources found.</p>
                ) : (
                  result.verified_sources.map((src, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white/10 border border-white/20 rounded-xl shadow-lg hover:scale-[1.03] transition cursor-pointer"
                    >
                      <h3 className="font-bold text-yellow-300">{src.source}</h3>
                      <p className="text-sm text-white/80">{src.title}</p>
                      <a
                        href={src.url}
                        target="_blank"
                        className="text-blue-200 underline text-sm"
                      >
                        Read more
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE — HOW TO USE */}
        <div className="w-1/3 pl-8 border-l border-white/20">
          <h2 className="text-2xl font-bold mb-4">How to Use</h2>

          <ol className="list-decimal list-inside space-y-4 text-white/90 text-lg">
            <li>Paste the news text inside the text box.</li>
            <li>Click the <strong>Predict</strong> button.</li>
            <li>AI will analyze and show confidence score.</li>
            <li>Below, check verified sources to confirm truth.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

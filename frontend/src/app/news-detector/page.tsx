"use client";

import { useState } from "react";
import "./predictPage.css"; // Importing custom CSS for animations

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6 animate-gradient">
      <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6">
        {/* Main Content */}
        <div className="w-2/3 pr-6">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center animate-fade-in">
            Fake News Detector
          </h1>

          {/* Input box */}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste news text here..."
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform duration-300 transform focus:scale-105"
            rows={4}
          />

          <button
            onClick={handlePredict}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-110 shadow-md hover:shadow-lg"
          >
            Predict
          </button>

          {result && (
            <div className="mt-6 animate-fade-in">
              {/* Confidence Bar */}
              <h2 className="text-lg font-semibold mb-2">AI Prediction</h2>
              <div className="w-full bg-gray-200 rounded-lg h-10 relative overflow-hidden">
                <div
                  className={`
                    h-10 flex items-center justify-center text-white font-bold text-sm transition-all duration-500 
                    ${
                      result.ai_prediction === "REAL"
                        ? "bg-green-500 animate-pulse shadow-[0_0_15px_3px_rgba(34,197,94,0.7)]"
                        : "bg-red-500 animate-pulse shadow-[0_0_15px_3px_rgba(239,68,68,0.7)]"
                    }
                  `}
                  style={{ width: `${(result.confidence * 100).toFixed(1)}%` }}
                >
                  {(result.confidence * 100).toFixed(1)}%
                </div>
              </div>

              <p className="mt-3 text-gray-700">
                <strong>Prediction:</strong>{" "}
                {result.ai_prediction === "REAL" ? (
                  <span className="text-green-600 font-semibold">REAL ✅</span>
                ) : (
                  <span className="text-red-600 font-semibold">FAKE ❌</span>
                )}
              </p>

              {/* Verified Sources */}
              <h2 className="mt-6 text-lg font-semibold">Verified Sources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {result.verified_sources.length === 0 ? (
                  <p className="text-gray-600">No sources found.</p>
                ) : (
                  result.verified_sources.map((src, i) => (
                    <div
                      key={i}
                      className="p-3 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-transform transform hover:scale-105"
                    >
                      <h3 className="font-semibold text-blue-700">{src.source}</h3>
                      <p className="text-sm text-gray-700">{src.title}</p>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 text-sm underline"
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

        {/* Instructions Section */}
        <div className="w-1/3 pl-6 border-l border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">How to Use</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Paste the news text into the input box.</li>
            <li>Click the <strong>Predict</strong> button.</li>
            <li>View the AI prediction and confidence level.</li>
            <li>Check verified sources for additional information.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

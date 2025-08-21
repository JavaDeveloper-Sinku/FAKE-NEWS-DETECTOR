"use client";


//Testing web page //

import { useState } from "react";
import { AlertTriangle, CheckCircle, BarChart3 } from "lucide-react";

type PredictionResult = {
  label: string;
  confidence: number;
};

export default function FakeNewsDetector() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!text.trim()) return;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      console.log("API Response:", data); // 👀 Debugging ke liye

      // ✅ Access nested prediction object
      const label = data.prediction?.label || "UNKNOWN";
      const confidence = data.prediction?.confidence || 0;

      setResult({ label, confidence });
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start py-10 px-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="absolute top-4 left-4 p-4 bg-white bg-opacity-90 rounded-xl shadow-lg z-10">
        <h2 className="text-lg font-bold text-gray-800">Model Created By:</h2>
        <p className="text-sm text-gray-700">Your Name or Team Name</p>
      </div>

      <div className="flex flex-col md:flex-row w-full items-start justify-between gap-8">
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold mb-6 text-white drop-shadow-lg text-center">
            📰 Fake News Detector
          </h1>

          <textarea
            className="w-full max-w-2xl p-4 rounded-xl border shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500 bg-white bg-opacity-80"
            rows={5}
            placeholder="Paste a news article or statement here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            onClick={handleCheck}
            disabled={loading}
            className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium hover:from-blue-600 hover:to-blue-800 transition disabled:bg-gray-400 shadow-lg"
          >
            {loading ? "Checking..." : "Check Fake News"}
          </button>

          {result && (
            <div className="mt-8 w-full max-w-md p-6 bg-white bg-opacity-90 rounded-2xl shadow-2xl text-center">
              <div className="flex flex-col items-center">
                {result.label === "FAKE" ? (
                  <AlertTriangle className="text-red-500 w-12 h-12 mb-2 drop-shadow-md" />
                ) : (
                  <CheckCircle className="text-green-500 w-12 h-12 mb-2 drop-shadow-md" />
                )}
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {result.label === "FAKE"
                    ? "⚠️ Fake News Detected"
                    : "✅ Real News"}
                </h2>
                <p className="text-gray-700 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Confidence: {" "}
                  <span className="font-medium">
                    {(result.confidence * 100).toFixed(2)}%
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/4 p-4 bg-white bg-opacity-90 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-3 text-gray-800 text-center">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
            <li>Paste the news article or statement in the text box.</li>
            <li>Click on the "Check Fake News" button.</li>
            <li>View the result and confidence score below.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

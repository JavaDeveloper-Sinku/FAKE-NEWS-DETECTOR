"use client";

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        📰 Fake News Detector
      </h1>

      <textarea
        className="w-full max-w-2xl p-4 rounded-xl border shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={5}
        placeholder="Paste a news article or statement here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleCheck}
        disabled={loading}
        className="mt-4 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
      >
        {loading ? "Checking..." : "Check Fake News"}
      </button>

      {result && (
        <div className="mt-8 w-full max-w-md p-6 bg-white rounded-2xl shadow-lg text-center">
          <div className="flex flex-col items-center">
            {result.label === "FAKE" ? (
              <AlertTriangle className="text-red-500 w-10 h-10 mb-2" />
            ) : (
              <CheckCircle className="text-green-500 w-10 h-10 mb-2" />
            )}
            <h2 className="text-2xl font-semibold mb-2">
              {result.label === "FAKE"
                ? "⚠️ Fake News Detected"
                : "✅ Real News"}
            </h2>
            <p className="text-gray-600 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Confidence:{" "}
              <span className="font-medium">
                {(result.confidence * 100).toFixed(2)}%
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

interface Result {
  prediction: string;
  confidence: number;
}

export default function Home() {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError("Please enter some text to verify.");
      return;
    }

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      // Ensure correct JSON body
      const bodyData = { text: text };
      console.log("Sending request body:", bodyData);

      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch prediction. Status: ${res.status}`);
      }

      const data = await res.json();
      console.log("API Response:", data);

      // Validate response keys
      if (
        data &&
        typeof data === "object" &&
        "prediction" in data &&
        "confidence" in data
      ) {
        // Ensure types
        setResult({
          prediction: String(data.prediction),
          confidence: Number(data.confidence),
        });
      } else {
        setError("Invalid response from server. Make sure backend is running correctly.");
      }
    } catch (err) {
      console.error(err);
      setError((err as Error).message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Fake News Verifier</h1>

      <textarea
        className="border p-3 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter news text here..."
      />

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <button
        className={`w-full py-3 rounded-md text-white font-semibold transition-colors duration-200 ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify"}
      </button>

      {result && (
        <div className="mt-6 p-5 border rounded-md bg-gray-100 space-y-2">
          <p>
            <strong>Model Prediction:</strong> {result.prediction}
          </p>
          <p>
            <strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
}

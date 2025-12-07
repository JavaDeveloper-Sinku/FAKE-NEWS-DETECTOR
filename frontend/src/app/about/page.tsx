"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-10 border border-gray-100">

        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Fake News Detector (FND)
        </h1>
        <p className="text-center text-gray-600 text-lg mb-10">
          An AI-powered solution to validate news authenticity in real time.
        </p>

        {/* Objective Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🎯 Project Objective</h2>
          <ul className="list-disc ml-6 text-gray-600 leading-7">
            <li>Detect misleading and false information automatically.</li>
            <li>Reduce misinformation spread on digital platforms.</li>
            <li>Help users identify trustworthy content.</li>
            <li>Create an AI-driven solution for public and researchers.</li>
          </ul>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🧠 How It Works?</h2>
          <p className="text-gray-600 leading-7">
            Fake News Detector uses Natural Language Processing (NLP) and Machine Learning.
            The system preprocesses input text, analyzes linguistic patterns, checks claim-based
            sentiment, and matches it with trained datasets to predict whether the content is 
            <span className="font-semibold text-blue-600"> True</span>, 
            <span className="font-semibold text-red-600"> Fake</span>, 
            or <span className="font-semibold">Unverified</span>.
          </p>
        </section>

        {/* Technology Stack */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">⚙️ Technology Stack</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
            <div className="p-3 border rounded-lg bg-gray-100">Next.js + TypeScript</div>
            <div className="p-3 border rounded-lg bg-gray-100">Tailwind CSS</div>
            <div className="p-3 border rounded-lg bg-gray-100">Python / ML Model</div>
            <div className="p-3 border rounded-lg bg-gray-100">NLP (TensorFlow / Sklearn)</div>
            <div className="p-3 border rounded-lg bg-gray-100">MySQL / MongoDB</div>
            <div className="p-3 border rounded-lg bg-gray-100">Fact-check API (optional)</div>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">📌 System Architecture</h2>
          <pre className="bg-black text-green-400 text-sm p-5 rounded-lg overflow-auto">
{`
              ┌────────────────┐
              │  User / Client │
              │  Browser / App │
              └───────┬────────┘
                      │ (Enter News Text)
                      ▼
            ┌────────────────────────┐
            │     Next.js Frontend    │
            │  (Typescript + Tailwind)│
            └─────────┬──────────────┘
                      │ Sends Request (HTTPS)
                      ▼
        ┌──────────────────────────────┐
        │ Python FastAPI / Flask Backend│
        │  API Endpoint (/predict)      │
        └─────────┬────────────────────┘
                  │ Pass Cleaned Text
                  ▼
          ┌─────────────────────┐
          │ ML Model (NLP)      │
          │ TensorFlow / Sklearn│
          └─────────┬──────────┘
                    │ Prediction
                    ▼
          ┌─────────────────────┐
          │ Result: Fake / True │
          │  or Unverified      │
          └─────────┬──────────┘
                    │ JSON API Response
                    ▼
          ┌────────────────────────┐
          │ Frontend Display Result │
          └────────────────────────┘
`}
          </pre>
        </section>

        {/* ML Workflow */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">🧠 ML Training Workflow</h2>
          <pre className="bg-gray-900 text-yellow-300 text-sm p-5 rounded-lg overflow-auto">
{`
Raw Dataset (CSV / Kaggle)
            │
            ▼
     Data Cleaning
(remove noise, symbols, stopwords)
            │
            ▼
   Text Tokenization
 (TF-IDF / Word2Vec / BERT)
            │
            ▼
 ML Model Training
(LogReg / SVM / LSTM / BERT)
            │
            ▼
Hyperparameter Tuning
            │
            ▼
Model Evaluation (Accuracy, F1)
            │
            ▼
Export Model (.pkl / .h5)
`}
          </pre>
        </section>

        {/* Prediction Flow */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">🚀 Real-Time Prediction Flow</h2>
          <pre className="bg-slate-800 text-blue-300 text-sm p-5 rounded-lg overflow-auto">
{`
User → Input News Text → Frontend
            │
            ▼
Send API Request → Backend
            │
            ▼
Backend → NLP + ML Predict
            │
            ▼
Return Result → UI Display
`}
          </pre>
        </section>

        {/* Importance */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">💡 Why Important?</h2>
          <p className="text-gray-600 leading-7">
            Fake news impacts society politically, economically, and psychologically.
            This tool helps students, journalists, and the public by verifying content authenticity,
            which contributes towards a safer and informed digital environment.
          </p>
        </section>

        {/* Future Enhancements */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🚀 Future Enhancements</h2>
          <ul className="list-disc ml-6 text-gray-600 leading-7">
            <li>AI-based Image & Deepfake detection</li>
            <li>Multi-language support</li>
            <li>Browser Extension</li>
            <li>WhatsApp & Telegram Fact-Check Bot</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;

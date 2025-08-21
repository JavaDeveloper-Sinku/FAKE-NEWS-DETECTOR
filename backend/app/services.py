from transformers import pipeline
from newsapi import NewsApiClient

# HuggingFace Model
model_name = "Pulk17/Fake-News-Detection"
fake_news_model = pipeline("text-classification", model=model_name)

# NewsAPI client
NEWS_API_KEY = "fb00544f0b7d4599b07450249837823d"   # <-- apna key yaha dalna
newsapi = NewsApiClient(api_key=NEWS_API_KEY)

# Mapping dictionary
label_mapping = {
    "LABEL_0": "REAL",
    "LABEL_1": "FAKE"
}

def predict_news(news_title: str):
    """AI Model se prediction"""
    result = fake_news_model(news_title)[0]
    return {
        "label": label_mapping.get(result["label"], result["label"]),  # mapping apply
        "score": float(result["score"])
    }

def verify_with_newsapi(news_title: str):
    """Cross verification trusted news sources se"""
    try:
        # Thoda broad query banate hain
        query = " ".join(news_title.split()[:6])  # sirf pehle 6 words
        articles = newsapi.get_everything(
            q=query,
            language="en",      # agar hindi news hai to "hi" bhi try karna
            sort_by="relevancy",
            page_size=3
        )
    except Exception as e:
        print(f"Error occurred: {e}")
        return []

    verified_sources = []
    for article in articles.get("articles", []):
        verified_sources.append({
            "source": article["source"]["name"],
            "title": article["title"],
            "url": article["url"]
        })

    return verified_sources

def analyze_news(news_title: str):
    """AI Prediction + NewsAPI Verification combine karke final response"""
    ai_result = predict_news(news_title)
    sources = verify_with_newsapi(news_title)

    return {
        "ai_prediction": ai_result["label"],         # REAL / FAKE
        "confidence": ai_result["score"],
        "verified_sources": sources,
        "final_verification": (
            ai_result["label"] if not sources else "REAL"   # agar sources mile to REAL
        )
    }

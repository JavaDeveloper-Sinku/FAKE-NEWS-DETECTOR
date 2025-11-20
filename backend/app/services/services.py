import os
from transformers import pipeline
from newsapi import NewsApiClient

# HuggingFace Model
model_name = "distilbert-base-uncased-finetuned-sst-2-english"
fake_news_model = pipeline("text-classification", model=model_name)

# NewsAPI client
NEWS_API_KEY = os.environ.get("NEWS_API_KEY")
newsapi = NewsApiClient(api_key=NEWS_API_KEY)

# Mapping dictionary
label_mapping = {
    "LABEL_0": "FAKE",
    "LABEL_1": "REAL"
}

def predict_news(news_title: str):
    result = fake_news_model(news_title)[0]
    return {
        "label": label_mapping.get(result["label"], result["label"]),
        "score": result["score"]
    }

def verify_with_newsapi(news_title: str):
    try:
        query = " ".join(news_title.split()[:6])
        articles = newsapi.get_everything(
            q=query,
            language="en",
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

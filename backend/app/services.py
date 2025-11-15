
from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline
from newsapi import NewsApiClient

app = FastAPI()

# HuggingFace Model
model_name = "Pulk17/Fake-News-Detection"
fake_news_model = pipeline("text-classification", model=model_name)

# NewsAPI client
NEWS_API_KEY = os.environ.get("NEWS_API_KEY")
newsapi = NewsApiClient(api_key=NEWS_API_KEY)

# Mapping dictionary
label_mapping = {
    "LABEL_0": "REAL",
    "LABEL_1": "FAKE"
}

class NewsRequest(BaseModel):
    news_title: str   # input JSON body ka format

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

def analyze_news(news_title: str):
    ai_result = predict_news(news_title)
    sources = verify_with_newsapi(news_title)

    return {
        "ai_prediction": ai_result["label"],
        "confidence": ai_result["score"],
        "verified_sources": sources,
        "final_verification": (
            ai_result["label"] if not sources else "REAL"
        )
    }

# FastAPI endpoint
@app.post("/analyze")
def analyze(request: NewsRequest):
    return analyze_news(request.news_title)

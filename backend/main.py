# main.py
from fastapi import FastAPI
from pydantic import BaseModel
from models.model_loader import predict_fake_news
from api.routes import router

# FastAPI app
app = FastAPI(title="Fake News Detector API", version="1.0.0")


class NewsRequest(BaseModel):
    text: str

# Routes register karna
app.include_router(router)

@app.get("/")
def home():
    return {"message": "Fake News Detector API is running"}


@app.post("/predict")
def predict(request: NewsRequest):
    result = predict_fake_news(request.text)
    return {
        "input_text": request.text,
        "predication": result["prediction"],
        "confidence": result["confidence"]
    }

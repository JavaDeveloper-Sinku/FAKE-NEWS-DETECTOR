# api/routes.py
from fastapi import APIRouter
from pydantic import BaseModel
from models.model_loader import predict_fake_news

router = APIRouter()

class NewsItem(BaseModel):
    text: str

@router.post("/predict")
def predict(news: NewsItem):
    result = predict_fake_news(news.text)
    return {"prediction": result}
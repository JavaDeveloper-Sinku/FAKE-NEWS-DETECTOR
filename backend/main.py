# main.py
from fastapi import FastAPI
from pydantic import BaseModel
from models.model_loader import predict_fake_news
from api.routes import router
from fastapi.middleware.cors import CORSMiddleware

# FastAPI app
app = FastAPI(title="Fake News Detector API", version="1.0.0")


#CORS steup ( frontend port )
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class NewsRequest(BaseModel):
    text: str

# Routes register karna
app.include_router(router)


#API Endpoints
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

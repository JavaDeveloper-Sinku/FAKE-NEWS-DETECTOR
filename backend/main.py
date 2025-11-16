from fastapi import FastAPI
from pydantic import BaseModel
from app.services import predict_news, verify_with_newsapi
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

class NewsRequest(BaseModel):
    text: str

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # yaha specific domain bhi de sakte ho ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)





@app.get("/")
def Home():
    return {"message": "Welcome to the News Verification API!"}


@app.post("/predict")
def check_news(request: NewsRequest):
    ai_result = predict_news(request.text)
    verified_sources = verify_with_newsapi(request.text)

    final_verification = "UNVERIFIED"
    if verified_sources:
        final_verification = "REAL" if ai_result["label"] == "REAL" else ai_result["label"]
    else:
        final_verification = ai_result["label"]

    return {
        "ai_prediction": ai_result["label"],
        "confidence": ai_result["score"],
        "verified_sources": verified_sources,
        "final_verification": final_verification
    }
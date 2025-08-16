# models/model_loader.py
from transformers import pipeline

def load_fake_news_model():
    model_name = "Pulk17/Fake-News-Detection"
    model = pipeline("text-classification", model=model_name)
    return model

# model ko load karke ek baar ready rakhte hain
fake_news_model = load_fake_news_model()

def predict_fake_news(text: str):

    result = fake_news_model(text)

    label = result[0]['label']
    score = result[0]['score']

    if label == "LABEL_1":
        prediction = "FAKE"
    else:
        prediction = "REAL"


    return {"prediction": prediction,
             "confidence": score
             }

from transformers import pipeline

def load_fake_news_model():
    model_name = "Amirmerfan/mobilebert-uncased-fake-news-detector"
    model = pipeline("text-classification", model=model_name)
    return model

fake_news_model = load_fake_news_model()

def predict_fake_news(text: str):
    if not text.strip():
        return {"error": "Empty input"}

    result = fake_news_model(text)
    label = result[0]['label']
    score = result[0]['score']

    # Agar model label FAKE/REAL return kare toh usko direct use karo
    if label in ["FAKE", "REAL"]:
        prediction = label
    else:
        prediction = "FAKE" if label == "LABEL_1" else "REAL"

    return {
        "label": prediction,   # ✅ frontend ke saath match
        "confidence": score
    }

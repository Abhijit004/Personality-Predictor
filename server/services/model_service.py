import joblib
import os

# Load the trained model
MODEL_PATH = os.path.join(os.path.dirname(__file__), "../model/mbti_model.pkl")
mbti_model = joblib.load(MODEL_PATH)

def predict_personality(text):
    """
    Function to predict personality type from input text.
    """
    prediction = mbti_model.predict([text])  # Assuming model takes text input
    return prediction[0]

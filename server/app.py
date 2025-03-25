from flask import Flask, request, jsonify
import joblib
import os
from dotenv import *
load_dotenv()  # take environment variables
config = dotenv_values(".env")
app = Flask(__name__)
model = joblib.load("./models/mbti_model.pkl")
vectorizer = joblib.load("./models/tfidf_vectorizer.pkl")
label_encoder = joblib.load("./models/label_encoder.pkl")
label_to_mbti = label_encoder.inverse_transform(list(range(len(label_encoder.classes_))))



def MBTI_predictor(text, model, vectorizer):
    """
    Predicts the MBTI type for a given text and returns the confidence.

    Args:
        text (str): The input text.
        model (LogisticRegression): The trained Logistic Regression model.
        vectorizer (TfidfVectorizer): The fitted TfidfVectorizer.

    Returns:
        tuple: A tuple containing the top 3 predicted MBTI types and the corresponding probabilities of that prediction.
    """
    text_vectorized = vectorizer.transform([text])
    probabilities = model.predict_proba(text_vectorized)
    prob_list = probabilities[0]
    # predicted_class_index = np.argsort(probabilities[0])[-3:][::-1] #finds the indices
    predicted_class_index = sorted(range(len(prob_list)), key=lambda i: prob_list[i], reverse=True)[:3]

    predicted_class = [label_to_mbti[pci] for pci in predicted_class_index] #finds the class labels for the indices
    confidence = [float(prob_list[pci]) for pci in predicted_class_index]
    
    print(predicted_class_index)


    return predicted_class, confidence

@app.route("/")
def home():
    return "ML Model is Running"

@app.route("/predict", methods = ["POST"])
def predict():
    try:
        data = request.json
        text = data['text']
        classes, confidences = MBTI_predictor(text, model, vectorizer)
        return jsonify({"predictions": classes, "confidences": confidences})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=config['debug'] == 'True')

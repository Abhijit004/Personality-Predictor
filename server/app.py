from flask import Flask, request, jsonify
from flask_cors import CORS
# from apscheduler.schedulers.background import BackgroundScheduler
import joblib
import os
from dotenv import *
from routes.predict import MBTI_predictor

# def update_database():
#     fetched = get_popular_movies()
#     if fetched:
#         push_csv_to_mongodb(fetched, collection_name="popular_movies")
#     else:
#         print("FETCH FAIL")

# push_csv_to_mongodb(csv_file="top_rated_movies.csv", collection_name="top_rated_movies")
# push_csv_to_mongodb(csv_file="popular_movies.csv", collection_name="popular_movies")


load_dotenv()  # take environment variables
config = dotenv_values(".env")

app = Flask(__name__)
CORS(app, supports_credentials=True, origins=["http://localhost:5173", "https://vibesphere-mbti.vercel.app"])

# def ping():
#     print("Ping Ping!")

# scheduler = BackgroundScheduler()
# # scheduler.add_job(ping, "cron", day=1, hour=0, minute=0)
# scheduler.add_job(update_database, "interval", minutes=1)
# scheduler.start()

@app.route("/")
def home():
    return "MBTI Model running. Go to main website to watch."

@app.route("/predict", methods = ["POST"])
def predict():
    try:
        data = request.json
        text = data['text']
        classes, confidences = MBTI_predictor(text)
        return jsonify({"predictions": classes, "confidences": confidences})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=config['debug'] == 'True')

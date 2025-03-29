import sys
import csv
from pymongo import MongoClient
from routes.predict import MBTI_predictor

def push_csv_to_mongodb(list_of_dict={}, csv_file="", db_name="test", collection_name="trending_movies"):
    """Reads a CSV file and stores the data in MongoDB."""

    # Connect to MongoDB
    # Change for MongoDB Atlas if needed
    client = MongoClient(
        "mongodb+srv://thedecoderyadav020:FUZUycqAq1L4x5ym@cluster0.lfqb5rl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    db = client[db_name]
    collection = db[collection_name]

    # Open and read CSV file
    if csv_file:
        with open(csv_file, mode="r", encoding="utf-8") as file:
            reader = csv.DictReader(file)  # Reads rows as dictionaries
            movies_data = list(reader)  # Convert to list of dicts
    else:
        movies_data = list_of_dict
    # Insert or update documents in MongoDB
    for movie in movies_data:
        # movie["id"] = int(movie["id"])  # Convert ID to integer if needed
        predict = MBTI_predictor(movie['overview'])
        movie['type'] = predict[0]
        collection.insert_one(movie)  # Insert directly

    print(f"✅ {len(movies_data)} movies pushed to MongoDB successfully!")

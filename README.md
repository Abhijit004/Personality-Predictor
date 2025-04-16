#  MBTI Personality Prediction using NLP

This project predicts MBTI (Myers-Briggs Type Indicator) personality types from user-generated text using Natural Language Processing (NLP) and machine learning techniques.

![MBTI-wikipedia](https://upload.wikimedia.org/wikipedia/commons/1/1f/MyersBriggsTypes.png)

> More about MBTI on [wikipedia](https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator) and also in [16personalities.com](https://www.16personalities.com/personality-types).


## 📌 Features

-  Predicts the `MBTI type` of the user based on **three questions**.
-  Recommends **movies** and **books** for the user based on their types.

## 🧪 Model Pipeline (For existing logistic regression)
> Code for model training: [google colab file](https://colab.research.google.com/drive/1hr6RWKD4epDkdfEuhL7ByO11QaJTGPUx?usp=sharing)

1.  **Text Preprocessing**  
    - Converting to lowercase.
    - Removing URL, special characters.
    - **Lemmatization**
    - **Stopword removal**
    
2.  **Vectorization**  
    - Converting text into **TF-IDF(Term Frequency and Inverse Document Frequency)** features for numerical feature extraction.
    
3.  **Classification**  
    **Logistic regression** model of `scikit-learn`
    
4.  **Accuracy with Logistic regression**  
    - Oversampling: `91%`, with 84% on `MBTI 500` dataset.
    - Augmentation: `89%`
    - Using class weights: `67%`
    - Undersampling: `56%`
 
 
##  📚Dataset used

- [MBTI dataset](https://www.kaggle.com/datasets/datasnaek/mbti-type)
- [Movie dataset](https://www.kaggle.com/datasets/jrobischon/wikipedia-movie-plots)
- [Books dataset](https://www.kaggle.com/datasets/ishikajohari/best-books-10k-multi-genre-data)
- [MBTI testing dataset](https://www.kaggle.com/datasets/zeyadkhalid/mbti-personality-types-500-dataset)
 
    
## 🚀Project workflow
![mbti-workflow-pngversion](https://github.com/user-attachments/assets/ddaae7b3-8b11-4b27-bb9e-ac3ebe588394)


## 📦 API Usage
The API returns the top three MBTI types along with their confidences, as predicted by the model.

**Endpoint:** `POST https://personality-predictor-mtm1.onrender.com/predict`  
**Payload:**

```json
{
  "text": "I love quiet evenings and meaningful conversations."
}
```

**Response:**

```json
{
  "confidences": [
    0.3015382561625205,
    0.1649483711317476,
    0.10491362966713379
  ],
  "predictions": [
    "INFP",
    "INFJ",
    "INTP"
  ]
}
```
    

## 🔧 Tech Stack

- `Python` (`Flask`) for deploying the model. Hosted via **onrender**.
- `scikit-learn` for model building and accuracy analysis.
- `React` with `Javascript`, for building the frontend. Hosted via **Vercel**.
- `NodeJS` for Backend- authentication, fetching movies/books of particular types. Hosted via **onrender**.
- `MongoDB atlas` for database, storing user info and movies/books data.

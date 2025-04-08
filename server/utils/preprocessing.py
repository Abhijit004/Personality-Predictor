## PREPROCESSING TEXT
"""
How we are preprocessing the text:
1. convert text in posts to lowercase as it is preferred in nlp.
2. Remove URLs.
3. Replace numbers, non-alphanumeric chars, underscores into whitespaces.
4. Replace multiple whitespace to a single whitespace.
5. Remove stopwords(e.g. in, from, to, the, etc).
6. **Lemmatisation**: Convert words to their base form (e.g., "running" → "run").
"""

### 1. converts text in posts to lowercase as it is preferred in nlp

### 2. Remove URLs.

def remove_urls(text):
    # regex to match urls
    pattern = re.compile(r'https?://[a-zA-Z0-9./-]*/[a-zA-Z0-9?=_.]*[_0-9.a-zA-Z/-]*')
    return re.sub(pattern, ' ', text)

### 3. Replace numbers, non-alphanumeric chars, underscores into whitespaces.

def clean_text(text):
    text = re.sub(r'[0-9]', ' ', text)   # Replace numbers with space
    text = re.sub(r'\W+', ' ', text)     # Replace non-alphanumeric characters with space
    text = re.sub(r'[_+]', ' ', text)    # Replace underscores and plus signs with space
    return text

### 4. Replace multiple whitespace to a single whitespace.

import re
replaceWhitespace = lambda x: re.sub(r'\s+', ' ', x)

### 5. Remove stopwords.
import nltk
from nltk.corpus import stopwords
nltk.download('stopwords')
remove_words = set(stopwords.words("english"))  # stopwords set

def remove_stopwords(text):
    return " ".join([w for w in text.split() if w.lower() not in remove_words])


### 6. **Lemmatisation**: Convert words to their base form (e.g., "running" → "run").
# Lemmatization reduces words to their base (dictionary) form, unlike stemming, which simply cuts off suffixes.

from nltk.stem import WordNetLemmatizer
lemmatizer = WordNetLemmatizer()
nltk.download('wordnet')

def lemmatize_text(text):
    return " ".join([lemmatizer.lemmatize(w) for w in text.split()])

### DRIVER CODE

def preprocess_text(text):
    text = text.lower()
    text = remove_urls(text)
    text = clean_text(text)
    text = replaceWhitespace(text)
    text = remove_stopwords(text)
    text = lemmatize_text(text)
    return text

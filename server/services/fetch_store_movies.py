import requests
import json
import csv

def get_page(api_key, language="en-US", page=1, tag='popular'):
    url = f"https://api.themoviedb.org/3/movie/{tag}?api_key={api_key}&language={language}&page={page}"

    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)
        data = response.json()
        return data.get("results", [])  # Return the results list, or an empty list if not found.
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return None
    except json.JSONDecodeError:
        print("Error decoding JSON response.")
        return None
    


def get_popular_movies():
    api_key = "071daa5401cb40875ba69fdbadc85557"  # Replace with your actual API key!
    if not api_key or api_key == "YOUR_API_KEY":
        print("Please replace 'YOUR_API_KEY' with your actual TMDb API key.")
        return

    all_movies = []
    for page in range(1, 10):  # Fetch data from 10 pages
        movies = get_page(api_key, language="en-US", page=1, tag='popular')
        if movies:
            all_movies.extend(movies)
        else:
            print(f"Failed to retrieve data from page {page}.")
            break #stop if any page fails.

    if all_movies:
        print(all_movies)
        return all_movies
        # csv_file = "top_rated_movies.csv"
        # try:
        #     with open(csv_file, "w", newline="", encoding="utf-8") as csvfile:
        #         fieldnames = ["title", "release_date", "overview", "vote_average", "poster_path", "backdrop_path", "original_language", "vote_count", "genre_ids"]
        #         writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        #         writer.writeheader()
        #         for movie in all_movies:
        #             writer.writerow({
        #                 "title": movie.get("title"),
        #                 "release_date": movie.get("release_date"),
        #                 "overview": movie.get("overview"),
        #                 "vote_average": movie.get("vote_average"),
        #                 "poster_path": movie.get("poster_path"),
        #                 "backdrop_path": movie.get("backdrop_path"),
        #                 "original_language": movie.get("original_language"),
        #                 "vote_count": movie.get("vote_count"),
        #                 "genre_ids": ",".join([str(i) for i in movie.get("genre_ids")]),
        #             })
        #     print(f"Data saved to {csv_file}")
        # except Exception as e:
        #     print(f"Error writing to CSV file: {e}")
    else:
        print("No movie data to save.")


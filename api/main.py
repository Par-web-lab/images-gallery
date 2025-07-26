import os
import requests
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS

# Load environment variables from .env.local
load_dotenv(dotenv_path="./.env.local")

# Unsplash configuration
UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")
DEBUG = os.environ.get("DEBUG", "True").lower() == "true"

# Check if the API key is available
if not UNSPLASH_KEY:
    raise EnvironmentError("Please create a .env.local file and insert your UNSPLASH_KEY")

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

app.config["DEBUG"] = DEBUG

@app.route("/new-image", methods=["GET"])
def new_image():
    # Get the 'query' parameter from the URL
    word = request.args.get("query")
    if not word:
        return jsonify({"error": "Missing 'query' parameter"}), 400

    # Prepare headers and params for Unsplash API
    headers = {
        "Accept-Version": "v1",
        "Authorization": f"Client-ID {UNSPLASH_KEY}"
    }
    params = {"query": word}

    # Make request to Unsplash
    try:
        response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
        response.raise_for_status()
        data = response.json()
        return jsonify(data), response.status_code
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

# Entry point when running via `python main.py`
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)

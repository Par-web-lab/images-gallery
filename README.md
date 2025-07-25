# Images Gallery

This is a full-stack image gallery web application built using **React (frontend)** and **Flask (backend)**. It enables users to search and browse high-resolution images dynamically via the Unsplash API. The app features a responsive UI built with HTML5, CSS, Bootstrap, and React, delivering real-time search and dynamic image displays. The backend is powered by Python Flask for efficient data and request management. Key skills demonstrated include front-end development, seamless API integration, and collaborative project workflows.

## 📁 Project Structure
<pre> <code>
images-gallery/
├── frontend/ # React frontend
├── api/ # Flask backend
└── README.md
</code></pre> 

## 🚀 Getting Started

### Prerequisites
- **Node.js and npm:** Required to run and build the React frontend.
- **Python (preferably 3.8+):** For running the Flask backend.
- **Install Python dependencies:** `pip install flask flask-cors`

## 📦 Installation
Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Par-web-lab/images-gallery.git
cd images-gallery
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Set Up the Backend
Make sure Python is installed on your system. Then install backend dependencies:

```bash
cd ../api
pip install -r requirements.txt
```

### 4. Start the Application
Go back to the root directory and run the following command to start both frontend and backend servers concurrently:

```bash
cd ..
npm start
```

## 🛠 Available Scripts

- `npm start` — Runs frontend and backend concurrently for development.
- `npm run frontend` — Starts the React frontend only.
- `npm run backend` — Starts the Flask backend only.

## 📦 Technologies Used

- React (JavaScript framework for frontend)
- Flask (Python micro-framework for backend)
- Flask-CORS (to handle Cross-Origin Resource Sharing during development)
- Concurrently (to run frontend and backend together)

## 📸 Features

- Search and display high-resolution images from Unsplash
- Responsive image gallery UI with real-time search
- Backend API to manage requests and serve data
- Cross-origin support during development for frontend-backend communication

## 📌 Notes

- Ensure your Python environment is activated before running Flask (if you use virtual environments).
- Configure your Unsplash API key securely in the backend or frontend code as per your implementation.
- For production, adjust CORS settings and API key security accordingly.

## 🖼️ App Screenshots

### Initial Display Page
Displays the default gallery view with a search bar.

![Initial Display of the App](images/Initial_Page.png)

### Type Search Item Page
User enters a keyword to generate a new image.
(Searched: Winter, Sun, Sea)

![Search Input Page](images/Search_Page.png)

### Retrieved Image Page
The app displays the image retrieved based on the search term.

![Image Result Page](images/Retrieved_Page.png)

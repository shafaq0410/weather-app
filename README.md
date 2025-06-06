Weather App 🌤️



A simple and elegant Node.js & Express web app that fetches and displays real-time weather information for any city using the OpenWeatherMap API.

Features
Search for any city worldwide to get current temperature and weather conditions.

Beautiful weather icons to visually show the weather.

Clean, responsive, and user-friendly interface with a soft, pastel color palette.

Handles invalid city names gracefully with clear error messages.

Demo
Note: This is a backend-powered app requiring Node.js server to run.

Technologies Used
Node.js & Express — backend server and routing

OpenWeatherMap API — real-time weather data

HTML & CSS — simple, elegant frontend

Body-parser — to parse incoming form data

HTTPS module — to securely fetch API data

Getting Started
Prerequisites
Node.js installed

An API key from OpenWeatherMap

Installation
Clone the repo:

bash
Copy code
git clone https://github.com/shafaq0410/weather-app.git
Navigate to the project directory:

bash
Copy code
cd weather-app
Install dependencies:

bash
Copy code
npm install
Replace the API key in App.js with your own OpenWeatherMap API key.

Start the server:

bash
Copy code
node App.js
Open your browser and go to:

arduino
Copy code
http://localhost:8000
How It Works
Enter a city name in the input form.

The app sends a POST request to the server.

The server fetches weather data from OpenWeatherMap API.

The response is parsed and rendered as a styled result page with temperature, weather description, and an icon.

Screenshots
![image](https://github.com/user-attachments/assets/a510d686-24f2-4bd7-a0d2-7c95f949ac5d)
![image](https://github.com/user-attachments/assets/089e1cb0-a046-4e69-b883-171d3cc2d1d3)


Future Improvements
Add a 5-day weather forecast.

Use client-side JavaScript to fetch data dynamically (AJAX).

Add location detection using the browser’s Geolocation API.

Deploy on a Node.js supported cloud platform like Render or Heroku.

License
This project is open source and available under the MIT License.

Contact
Created by Shafaq 


import requests
from flask import request
from flask import Flask

app = Flask(__name__)

@app.route("/weather")

def get_response():
    city = request.headers.get('city')
    response = requests.get("https://api.openweathermap.org/data/2.5/weather?q={city}&appid=0af7650b00321f8081a8a9ad3a838f51")
    return response.json()


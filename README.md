# AirbnbBerlin

This project builds upon the berlin dataset from http://insideairbnb.com (from 2022). An xgboost model was trained on said data to predict prices of
airbnbs in berlin. The model is based on a number of features including location, type of apartment, number of rooms etc. The model is contained in a compressed
form within the backend directory. There I have written a simple FastAPI python backend that can take information about an airbnb and produce a predicted price.
In the frontend folder is a react.js frontend for providing the information and displaying the predicted price.

Both frontend and backend can be found as docker images on my dockerhub https://hub.docker.com/repository/docker/quantumspinozist.

 
![Bildschirmfoto vom 2023-11-11 15-16-29](https://github.com/QuantumSpinozist/AirbnbBerlin/assets/143954969/92c054de-82c4-4d44-9c5b-744f9f5b5934)
![Bildschirmfoto vom 2023-11-11 15-16-40](https://github.com/QuantumSpinozist/AirbnbBerlin/assets/143954969/3116a7aa-8b00-4ef6-a9ae-ea15e2534f2f)

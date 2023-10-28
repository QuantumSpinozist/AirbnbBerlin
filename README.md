# AirbnbBerlin

This project builds upon the berlin dataset from http://insideairbnb.com (from 2022). An xgboost model was trained on said data to predict prices of
airbnbs in berlin. The model is based on a number of features including location, type of apartment, number of rooms etc. The model is contained in a compressed
form within the backend directory. There I have written a simple FastAPI python backend that can take information about an airbnb and produce a predicted price.
In the frontend folder is a react.js frontend for providing the information and displaying the predicted price.

Both frontend and backend can be found as docker images on my dockerhub https://hub.docker.com/repository/docker/quantumspinozist.

 

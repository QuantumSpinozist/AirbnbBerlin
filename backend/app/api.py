# Dependencies
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import pandas as pd
import os
import json
import gzip

#model_path = os.path.join(os.path.dirname(__file__), "xgb_airbnb.pkl.gz")
#model = pickle.load(open(model_path, "rb"))

model_path = os.path.join(os.path.dirname(__file__), "xgb_airbnb.pkl.gz")

# Open the compressed file for reading
with gzip.open(model_path, 'rb') as f:
    model = pickle.load(f)

base_input_path = os.path.join(os.path.dirname(__file__), "base_input.json")
base_input = json.load(open(base_input_path, "rb"))

ex_input_path = os.path.join(os.path.dirname(__file__), "example_input.json")
ex_input = json.load(open(ex_input_path, "rb"))


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

mean_item = {'room_type': {'label': 'Private room', 'value': 'Private room'},
              'property_type': {'value': 'Private room in rental unit', 'label': 'Private room in rental unit'},
                'bedrooms': {'value': 1, 'label': 1},
                  'beds': {'value': 1, 'label': 1},
                    'bathrooms': {'value': 1, 'label': 1},
                      'neighbourhood_group': {'value': 'Mitte', 'label': 'Mitte'},
                        'neighbourhood': {'value': 'Alexanderplatz', 'label': 'Alexanderplatz'},
                          'host_is_superhost': {'label': 'No', 'value': 0},
                            'host_identity_verified': {'label': 'No', 'value': 0},
                              'host_response_time': {'label': 'within a day', 'value': 2},
                                'amenities': [{'label': 'essentials', 'value': 'essentials'}],
                                  'availability_30': {'value': 1, 'label': 1},
                                    'availability_60': {'value': 10, 'label': 10},
                                      'availability_90': {'value': 20, 'label': 20},
                                        'availability_365': {'value': 50, 'label': 50}}


def transform_form(item:dict, base):
    #overwrite mean item with input values
    item = {key: item.get(key, value) for key, value in mean_item.items()}

    #set one hot encoded features to 1
    one_hot = ['room_type','property_type', 'neighbourhood', 'neighbourhood_group']
    add_feature_name = ''
    for feature in one_hot:
        #need to add something to feature name for some
        if feature in ['neighbourhood', 'neighbourhood_group']:
            add_feature_name = '_cleansed'
        
        #check if column exists and set to 1
        if feature + add_feature_name + '_' + item[feature]['value'] in base:
            base[ feature + add_feature_name + '_' + item[feature]['value'] ] = 1
        else:
            raise Exception("value not found as column in base dataframe")
        add_feature_name = ''

    #set numerical features
    numerical = ['bedrooms', 'beds', 'bathrooms','host_response_time','availability_30','availability_60','availability_90','availability_365','host_is_superhost','host_identity_verified']
    for feature in numerical:
        base[feature] = item[feature]['value']
    
    #set correct amenities to 1
    for amenity in item['amenities']:
        amenity = amenity['value']
        base['amenities_'+amenity] = 1
    
    return base

@app.post('/predict')
async def scoring_endpoint(item:dict) -> dict:
    item_transformed=transform_form(item, base_input.copy())
    #item_transformed = ex_input
    df = pd.DataFrame([item_transformed.values()], columns=item_transformed.keys())
    yhat = model.predict(df)
    return {'prediction':round(float(yhat),2)}
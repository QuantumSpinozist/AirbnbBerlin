import React, { useState } from "react";
import PropertyType from "./PropertyType";
import Size from "./Size";
import Location from "./Location";
import HostInformation from "./HostInformation";
import Availability from "./Availability";
import Amenities from "./Amenities";
import '../index.css';


export default function FormContainer() {
    const [formValues, setFormValues ] = useState({});
    const [prediction, setPrediction] = useState(null);


    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://0.0.0.0:8000/predict', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( formValues )
          });
    
          if (response.ok) {
            const data = await response.json();
            setPrediction(data.prediction);
            console.log(prediction);
          } else {
            console.error('Request failed:', response.status);
          }
        } catch (error) {
          console.error('Error:', error);
        }
    };
    
    return (
        <div className="dropdown">
            <form onSubmit={handleFormSubmit}>
                <PropertyType formValues={formValues} setFormValues={setFormValues} />
                <Size formValues={formValues} setFormValues={setFormValues} />
                <Location formValues={formValues} setFormValues={setFormValues} />
                <HostInformation formValues={formValues} setFormValues={setFormValues} />
                <Amenities formValues={formValues} setFormValues={setFormValues} />
                <Availability formValues={formValues} setFormValues={setFormValues} />
                <button type="submit" className="button">Submit</button>
            </form>
            <h1>Predicted Price per night: {prediction}</h1>
        </div>
    )
}
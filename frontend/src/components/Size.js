import React from "react";
import Dropdown from "./Dropdown";

export default function Size({ formValues, setFormValues }) {
    return (
        <div className="dropdown">
            <h2>Size of the Property</h2>
            <ul className="list">
                <li>
                    <Dropdown
                    name="Number of bedrooms: "
                    options={[...Array(16).keys()].slice(1)}
                    onChange={bedrooms => {setFormValues({ ...formValues, bedrooms })}}
                    />
                </li>
                <li>
                    <Dropdown
                    name="Number of beds: "
                    options={[...Array(26).keys()].slice(1)}
                    onChange={beds => {setFormValues({ ...formValues, beds })}}
                    />
                </li>
                <li>
                    <Dropdown
                    name="Number of bathrooms: "
                    options={[...Array(21).keys()].map( x => x / 2)}
                    onChange={bathrooms => {setFormValues({ ...formValues, bathrooms })}}
                    />
                </li>
            </ul>
        </div>
    )
}
import Dropdown from "./Dropdown";
import React from "react";

export default function Availability({ formValues, setFormValues }) {
    return (
        <div className="dropdown">
            <h2>Availability of the property: </h2>
            <ul className="list">
                <li>
                    <Dropdown
                    name="Number of open days in the next 30 days: "
                    options={[...Array(31).keys()]}
                    onChange={availability_30 => {setFormValues({ ...formValues, availability_30 })}}
                    />
                </li>
                <li>
                    <Dropdown
                    name="Number of open days in the next 60 days: "
                    options={[...Array(61).keys()]}
                    onChange={availability_60 => {setFormValues({ ...formValues, availability_60 })}}
                    />
                </li>
                <li>
                    <Dropdown
                    name="Number of open days in the next 90 days: "
                    options={[...Array(91).keys()]}
                    onChange={availability_90 => {setFormValues({ ...formValues, availability_90 })}}
                    />
                </li>
                <li>
                    <Dropdown
                    name="Number of open days in the next 365 days: "
                    options={[...Array(366).keys()]}
                    onChange={availability_365 => {setFormValues({ ...formValues, availability_365 })}}
                    />
                </li>
            </ul>
        </div>
    )
}
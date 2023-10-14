import Dropdown from "./Dropdown";
import React from "react";

export default function HostInformation({ formValues, setFormValues }) {
    const optionsResponseTime = [
        {label : "within an hour", value : 0},
        {label : "within a few hours", value : 1},
        {label : "within a day", value : 2},
        {label : "a few days or more", value : 3},
    ]
    return (
        <div className="dropdown">
            <h2>Information about the Host</h2>
            <ul className="list">
                <li>
                    <Dropdown
                    name="Is the host a superhost?"
                    options={[{label : "Yes", value : 1},{label : "No", value : 0}]}
                    onChange={host_is_superhost => {setFormValues({ ...formValues, host_is_superhost })}}
                    useLabel={true}
                    />
                </li>
                <li>
                    <Dropdown
                    name="Is the hosts identity verified?"
                    options={[{label : "Yes", value : 1},{label : "No", value : 0}]}
                    onChange={host_identity_verified => {setFormValues({ ...formValues, host_identity_verified })}}
                    useLabel={true}
                    />
                </li>
                <li>
                    <Dropdown
                    name="Response time of the host"
                    options={optionsResponseTime}
                    onChange={host_response_time => {setFormValues({ ...formValues, host_response_time })}}
                    useLabel={true}
                    />
                </li>
            </ul>
        </div>
    )
}
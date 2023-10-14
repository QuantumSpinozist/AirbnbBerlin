import React from "react";
import Dropdown from "./Dropdown";
import '../index.css';




export default function PropertyType({ formValues, setFormValues }) {
    const optionsPropertyType = [
        "Entire rental unit",
        "Private room in rental unit",
        "Entire condo",
        "Entire serviced apartment",
        "Entire loft",
        "Private room in condo",
        "Room in hotel",
        "Private room in home",
        "Entire home",
        "Room in boutique hotel",
        "Shared room in hostel",
        "Shared room in rental unit",
        "Private room in bed and breakfast",
        "Private room in loft",
        "Entire guesthouse",
        "Private room in hostel",
        "Entire vacation home",
        "Room in serviced apartment",
        "Private room in townhouse",
        "Room in aparthotel",
        "Entire townhouse",
        "Entire guest suite",
        "Houseboat",
        "Private room in serviced apartment",
        "Entire bungalow",
        "Private room",
    ]
    return (
        <div className="dropdown">
            <h2>Property and Room Type</h2>
            <ul className="list">
                <li>
                    <Dropdown
                    name="Room Type: "
                    options={[{label : "Entire home or apartment", value : "Entire home/apt"}, {label : "Private room", value : "Private room"},{label : "Shared room", value : "Shared room"}, {label : "Hotel room", value : "Hotel room"}]}
                    onChange={room_type => setFormValues({ ...formValues, room_type })}
                    useLabel={true}
                    />
                </li>
                <li>
                    <Dropdown
                    name="Property Type: "
                    options={optionsPropertyType}
                    onChange={property_type => setFormValues({ ...formValues, property_type })}
                    />
                </li>
            </ul>
        </div>
    )
}




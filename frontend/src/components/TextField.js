/* import React, { useState } from "react";


export default function TextField(props) {
    const [inputValue, setInputValue ] = useState("");

    const inputChange = event => {
        setInputValue(event.target.value);
    }

    return (
        <form>
            <label>{props.name}
            <input type="text" value={inputValue} onChange={inputChange}/>
            </label>
            <p>{props.name}{inputValue}</p>
        </form>
    )
} */
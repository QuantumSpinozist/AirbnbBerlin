import React from "react";
import Select from 'react-select';
import '../index.css';


const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 400, // Set the desired width
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: 1000, // Set the desired max height
    }),
  };

export default function Dropdown({ name, options, onChange, useLabel=false , isMulti=false}) {
    // convert [value] to [{value, label}]
    const optionsArray = options.map( option =>{
        return {value : option, label : option}
    });

    return (
        <div>
            <label>{name}</label>
            <Select
            options={useLabel ? options : optionsArray}
            onChange={onChange}
            isSearchable={true}
            placeholder={options[0].label}
            styles={customStyles}
            isMulti={isMulti}
            />
        </div>
    )
}
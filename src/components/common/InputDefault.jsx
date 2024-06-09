import React from 'react';


const InputDefault = ({ id, className , type , placeholder, value, disabled, hidden }) => {

    return (
        <input id={id} type={type} className={className} placeholder={placeholder} value={value} disabled={disabled} hidden={hidden} />
    );
};

export default InputDefault;
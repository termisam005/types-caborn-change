import React from 'react';
import { useState } from 'react';
import ImgComponent from '../../components/common/ImgComponent';


const InputZone = ({ zoneClass, type , placeholder, inputClass }) => {

    //input 이벤트
    const [id, setId] = useState('');
    const writePut = (e) => {
        setId(e.target.value);
    }
    const onDelete = (e) => {
        setId(e.target.value = '');
    }

    return (
        <div className={zoneClass}>
            <input type={type} className={inputClass} placeholder={placeholder} value={id} onChange={writePut} />
            <span className={'input_icon'} onClick={onDelete}>
                <ImgComponent src={"close_circle_16.svg"} />
            </span>
        </div>
    );
};

export default InputZone;
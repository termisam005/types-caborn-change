import React from 'react';
import { useState } from 'react';
import ImgComponent from './ImgComponent';

interface Props{
    zoneClass?: string;
	type?: 'text' | 'email' | 'phone' |'submit';
	placeholder?: string;
    inputClass?: string;
}

const InputZone = ({ zoneClass, type , placeholder, inputClass}:Props) => {

    //input 이벤트
    const [id, setId] = useState('');
    const writePut = (e:any) => {
        setId(e.target.value);
    }
    const onDelete = (e:any) => {
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
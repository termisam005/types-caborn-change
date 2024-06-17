import {memo} from 'react';

interface Props{
    id?: string;
	className: string;
	type?: 'text' | 'email' | 'submit';
	placeholder?: string;
    value?: string;
    disabled: boolean;
    hidden: boolean;
}

const InputDefault = memo(({ id, className , type , placeholder, value, disabled, hidden }:Props) => {

    return (
        <input id={id} type={type} className={className} placeholder={placeholder} value={value} disabled={disabled} hidden={hidden} />
    );
});

export default InputDefault;
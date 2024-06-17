import {memo} from 'react';


interface Props{
	type?: 'button' | 'submit' | 'reset';
	id?: string;
	className: string;
	onClick?: () => void;
	txt: string;
}

const Button = memo(({ type, id, className, onClick, txt }:Props) => {

    return (
        <button type={type} id={id} className={className} onClick={onClick}>
            {txt}
        </button>
    );
});

export default Button;
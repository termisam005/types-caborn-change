import {memo} from 'react';

interface Props {
	src: string;
	onClick?: () => void;
	style?: React.CSSProperties;
	className?: string;
	id?: string;
	alt?: string;
}


const ImgComponent = memo(({ src, onClick, style, className, id }:Props) => {

    return (
        <img 
            className={className}
            style={style}
            src={require('./../../assets/images/' + src)} 
            alt={'img'}
            onClick={onClick}
            id={id}
        />
    );
});

export default ImgComponent;
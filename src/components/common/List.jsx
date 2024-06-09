import React from 'react';
import { Link } from 'react-router-dom';
import ImgComponent from './ImgComponent';


const List = ({ i, product }) => {

    return (
        <li>
            <Link to={'/productdetail'}>
                <section className='list_box'>
                    <div className='list_thumbnail'>
                        <ImgComponent className={'img_thumb'} src={'img_thumb_' + i + '.png'} />
                    </div>
                    <div className='list_text'>
                        <dl className='list_name_dl'>
                            <dt>{product.brand}</dt>
                            <dd>{product.name}</dd>
                        </dl>
                        <div className='list_price'>
                            <p className='price'>{product.price}</p>
                            <span className='unit'>CTs</span>
                        </div>
                    </div>
                </section>
            </Link>
        </li>
    );
};

export default List;
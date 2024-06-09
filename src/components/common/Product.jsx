import React, { Fragment } from 'react';


const Product = ({ brand, productName, price, unit }) => {

    return (
        <Fragment>
            <span className='brand_name'>{brand}</span>
            <h2 className='product_name'>{productName}</h2>
            <div className='cost_box'>
                <p className='cost'>{price}</p>
                <span className='unit'>{unit}</span>
            </div>
        </Fragment>
    );
};

export default Product;
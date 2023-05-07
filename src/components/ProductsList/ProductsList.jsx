import React from 'react';
import Product from '../Product/Product';
import ProductData from '../../json/ProductData.json';

const ProductsList = () => {
    console.log(ProductData);
    return (
        <div className="product-main">
            <h1>FPT FACE</h1>
            <div className="product-container">
                {ProductData.map((data, index) => {
                    return <Product data={data} key={index}></Product>;
                })}
            </div>
        </div>
    );
};

export default ProductsList;

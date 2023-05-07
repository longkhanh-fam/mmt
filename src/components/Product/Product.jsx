import React from 'react';
import './Product.css';

const Product = (props) => {
    const imgurl =
        'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/17/638173197260604063_iphone-11-dd.jpg';

    const { data } = props;

    return (
        <div className="flex flex-row w-full p-2 m-2 rounded shadow main">
            <div className="w-48 h-48 ">
                <img className="object-cover w-full h-full rounded" src={imgurl} />
            </div>
            <div className="w-full ">
                <a href={data.url} rel="noreferrer" target="_blank">
                    <div className="flex flex-col items-center p-4">
                        {/* <p className="text-xs font-light text-center text-gray-400">Hammond robotics</p> */}
                        <h1 className="mt-1 font-bold text-center text-gray-800">{data.name}</h1>
                        <p className="mt-1 text-center text-gray-800">{data.price}</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Product;

import React from 'react';
import './Product.css';

const Product = (props) => {
    const { data, delay } = props;
    const imgurl = data.img_url;
    const handleFind = (name) => {
        if (name === 'tgdd') return 'THẾ GIỚI DI ĐỘNG';
        if (name === 'FPT') return 'FPT SHOP';
        if (name === 'nguyenkim') return 'NGUYENKIM';
        if (name === 'cellphone') return 'CELLPHONE';
        if (name === 'phongvu') return 'PHONGVU';
        if (name === 'hnc') return 'HACOM';
    };

    return (
        <div
            style={{ animationDelay: `${delay * 0.2}s` }}
            className="animate__animated animate__fadeInLeft flex flex-row w-full p-4 mb-4 rounded main bg-gray-950 hover:bg-gray-800"
        >
            <div className="w-32 h-32 ">
                <img className="object-cover w-full h-full rounded" src={imgurl} />
            </div>
            <div className="w-full ">
                <a href={data.url} rel="noreferrer" target="_blank">
                    <div className="flex flex-col p-4 ">
                        <p className="text-md font-bold text-start text-gray-400 ">
                            {handleFind(data.retailer)}
                        </p>
                        <h1 className="text-2xl font-bold text-start text-gray-50">{data.name}</h1>
                        <p className="mt-1 text-start text-gray-50 text-base">{data.price}</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Product;

import React, { useState } from 'react';
import Product from '../Product/Product';
import ProductData from '../../json/ProductData.json';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductsList = () => {
    // const [title, setTitle] = useState('Newest');
    const data = ProductData;

    // const handleDropdownSelect = (eventKey) => {
    //     setTitle(eventKey);
    //     // handleSort(eventKey);
    // };

    // const handleSort = (eventKey) => {
    //     if (eventKey === 'date')
    //         data.sort((a, b) => {
    //             return new Date(b.createdAt) - new Date(a.createdAt);
    //         });
    //     if (eventKey === 'comments')
    //         data.sort((a, b) => {
    //             return b.cmtCount > a.cmtCount ? 1 : -1;
    //         });
    //     if (eventKey === 'views')
    //         data.sort((a, b) => {
    //             return b.view > a.view ? 1 : -1;
    //         });
    //     if (eventKey === 'likes')
    //         data.sort((a, b) => {
    //             return b.likeCount > a.likeCount ? 1 : -1;
    //         });
    // };

    return (
        <div className="product-main">
            <h1 className="text-3xl font-bold">FPT FACE</h1>
            <div className="flex w-full">
                <div className="w-3/4">
                    {data.slice(0, 5).map((data, index) => {
                        return <Product data={data} key={index}></Product>;
                    })}
                </div>
                <div className="w-1/4">
                    {/* {[DropdownButton].map((DropdownType, idx) => (
                        <DropdownType
                            as={ButtonGroup}
                            key={idx}
                            id={`dropdown-button-drop-${idx}`}
                            size="sm"
                            variant="secondary"
                            title={title}
                            onSelect={handleDropdownSelect}
                        >
                            <Dropdown.Item eventKey="likes">Likes</Dropdown.Item>
                            <Dropdown.Item eventKey="comments">Comments</Dropdown.Item>
                            <Dropdown.Item eventKey="views">Views</Dropdown.Item>
                            <Dropdown.Item eventKey="date">Date</Dropdown.Item>
                        </DropdownType>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default ProductsList;

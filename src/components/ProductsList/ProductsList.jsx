import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import ProductData from '../../json/ProductData.json';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductsList = () => {
    const [sortBy, setSortBy] = useState('Sort By');
    const [isOpen, setIsOpen] = useState(false);
    const data = ProductData;

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSort = (type) => {
        console.log('sort by', type);
        setSortBy(type);

        if (type === 'price-up')
            data.sort((a, b) => {
                a.price.slice(0, -2);
                b.price.slice(0, -2);
                if (a.price.length !== b.price.length)
                    return b.price.length < a.price.length ? 1 : -1;
                return b.price < a.price ? 1 : -1;
            });
        if (type === 'price-down')
            data.sort((a, b) => {
                a.price.slice(0, -2);
                b.price.slice(0, -2);
                if (a.price.length !== b.price.length)
                    return b.price.length > a.price.length ? 1 : -1;
                return b.price > a.price ? 1 : -1;
            });
        if (type === 'name') data.sort((a, b) => a.name.localeCompare(b.name));
        toggleDropdown();
    };

    return (
        <div className="product-main">
            <h1 className="text-3xl font-bold mb-4">FPT FACE</h1>
            <div className="flex w-full">
                <div className="w-3/4">
                    {data.slice(0, 20).map((data, index) => {
                        return <Product data={data} key={index}></Product>;
                    })}
                </div>
                <div className="w-1/4">
                    <div className="relative">
                        <button
                            id="dropdownDefaultButton"
                            data-dropdown-toggle="dropdown"
                            className="w-3/4 flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                            onClick={toggleDropdown}
                        >
                            {sortBy}{' '}
                            <svg
                                className="w-4 h-4 ml-2"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        {isOpen && (
                            <div className="flex justify-center">
                                <div
                                    id="dropdown"
                                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownDefaultButton"
                                    >
                                        <li>
                                            <div>
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        handleSort('price-down');
                                                    }}
                                                    className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Price down
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        handleSort('price-up');
                                                    }}
                                                    className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Price up
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        handleSort('name');
                                                    }}
                                                    className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Name
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsList;

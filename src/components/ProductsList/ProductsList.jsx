import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SearchBar from '../SearchBar/SearchBar';

const ProductsList = (props) => {
    const [sortBy, setSortBy] = useState('Sort By');
    const [isOpen, setIsOpen] = useState(false);
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(999999999);
    const { productList } = props;

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSort = (type) => {
        console.log('sort by', type);
        setSortBy(type);

        if (type === 'price-up')
            productList.sort((a, b) => {
                a.price.slice(0, -2);
                b.price.slice(0, -2);
                if (a.price.length !== b.price.length)
                    return b.price.length < a.price.length ? 1 : -1;
                return b.price < a.price ? 1 : -1;
            });
        if (type === 'price-down')
            productList.sort((a, b) => {
                a.price.slice(0, -2);
                b.price.slice(0, -2);
                if (a.price.length !== b.price.length)
                    return b.price.length > a.price.length ? 1 : -1;
                return b.price > a.price ? 1 : -1;
            });
        if (type === 'name') productList.sort((a, b) => a.name.localeCompare(b.name));
        toggleDropdown();
    };

    return (
        <div className="product-main mt-4 bg-gray-900">
            <SearchBar productList={productList} />
            <div className="flex w-full">
                <div className="w-3/4">
                    {productList &&
                        productList.slice(0, 20).map((data, index) => {
                            return <Product data={data} key={index}></Product>;
                        })}
                </div>
                <div className="w-1/4 bg-gray-900 ml-8">
                    <div className="p-4 bg-gray-950 rounded">
                        <div className="w-full flex">
                            <div className="w-1/2">
                                <label
                                    for="first_name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Higher than
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder={low}
                                    required
                                />
                            </div>
                            <h2 className="dark:text-white">-</h2>
                            <div className="w-1/2">
                                <label
                                    for="first_name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Lower than
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder={high}
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full flex mt-2">
                            <button
                                id="dropdownDefaultButton"
                                productList-dropdown-toggle="dropdown"
                                className="w-full flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        </div>
    );
};

export default ProductsList;

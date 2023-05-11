import React, { useState, useEffect } from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';

import SearchBar from '../SearchBar/SearchBar';

const ProductsList = (props) => {
    const [sortBy, setSortBy] = useState('Sort By');
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(999999999);
    const { productList } = props;

    const debounce = (fn, delay) => {
        let timer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(context, args);
            }, delay);
        };
    };

    // const handleSearch = debounce(() => {
    //     setQuery(userInput);
    // }, 500);

    const handleLowChange = (event) => {
        setLow(event.target.value);
        if (event.target.value === '') setLow(0);
    };
    const handleHighChange = (event) => {
        setHigh(event.target.value);
        if (event.target.value === '') setHigh(999999999);
    };

    const handleFilter = () => {
        console.log(123);
    };

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
        <div className="product-main my-8 bg-gray-900">
            <SearchBar productList={productList} />
            <div className="flex w-full">
                <div className="w-3/4">
                    {productList && <ProductContainer productList={productList} />}
                </div>
                <div className="w-1/4 bg-gray-900 ml-8">
                    <div className="p-4 bg-gray-950 rounded">
                        <div className="w-full flex mt-2 flex-col">
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
                                <div className="mt-2 flex justify-center w-full">
                                    <div
                                        id="dropdown"
                                        className="w-full z-10 bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                                    >
                                        <ul
                                            className="w-full py-2 text-sm text-gray-700 dark:text-gray-200"
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

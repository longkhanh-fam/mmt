import React, { useState } from 'react';
import SearchShow from '../SeachShow/SearchShow';

const SearchBar = (props) => {
    const { productList } = props;
    const [query, setQuery] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isPanelOpen, setIsPanelOpen] = useState(false);

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

    const handleSearch = debounce(() => {
        setQuery(userInput);
    }, 500);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
        if (event.target.value === '') setIsPanelOpen(false);
        else setIsPanelOpen(true);
    };

    const searchList =
        productList.filter((product) => {
            const titleMatch = product.name.toLowerCase().includes(query.toLowerCase());
            return titleMatch;
        }) || [];

    return (
        <div className="relative">
            <form className="mb-4">
                <label
                    for="search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="search"
                        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Search"
                        onChange={handleInputChange}
                        onKeyUp={handleSearch}
                        required
                    />
                </div>
            </form>
            {isPanelOpen && <SearchShow searchList={searchList} />}
        </div>
    );
};

export default SearchBar;

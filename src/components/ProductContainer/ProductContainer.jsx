import React, { useState } from 'react';
import Product from '../Product/Product';
import ReactPaginate from 'react-paginate';
import './ProductContainer.css';

const PaginatedItems = ({ blogData, itemsPerPage }) => {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = blogData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blogData.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blogData.length;
        // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="w-full">
                {currentItems &&
                    currentItems.map((data, index, delay) => {
                        return <Product data={data} key={index} delay={index} />;
                    })}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName={'pagination mt-8'}
            />
        </>
    );
};

const ProductContainer = (props) => {
    const { productList } = props;
    return (
        <div className="w-full">
            {productList.length === 0 ? (
                <p className="animate-animated animate__slideInRight text-2xl font-bold text-start text-gray-50">
                    No data
                </p>
            ) : (
                <PaginatedItems itemsPerPage={10} blogData={productList} />
            )}
        </div>
    );
};

export default ProductContainer;

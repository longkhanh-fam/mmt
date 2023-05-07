import React from 'react';
import './Product.css';

const Product = (props) => {
    const imgurl =
        'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/17/638173197260604063_iphone-11-dd.jpg';

    const { data } = props;

    return (
        <div className="main">
            <a href={data.url} rel="noreferrer" target="_blank">
                <div className="card-main">
                    <div className="img-section">
                        <span className="opacity lazy-load-image-loaded">
                            <img
                                src={imgurl}
                                alt="iPhone 11 64GB"
                                title="iPhone 11 64GB"
                                height="214"
                            />
                        </span>
                    </div>
                    <div className="info-section">
                        <h3>
                            <a
                                href={data.url}
                                class="cdt-product__name"
                                rel="noreferrer"
                                target="_blank"
                            >
                                {data.name}
                            </a>
                        </h3>
                        <div>
                            <h2>{data.price}</h2>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Product;

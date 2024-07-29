// import '../../styling/ItemList.css';
import React from 'react';

function ProductListItem(product) {
    console.log(product.product_images)
    console.log(product.product.product_name)
    return (
        <div key={product.product.product_name} className="col mt-5">
            <div className='card'>
                <a href="#"><img src={product.product.product_images} className="card-img-top" alt="..." /></a>
                <div className="card-body">
                    <a href="#"><h5 className="card-title">{product.product.product_name}</h5></a>
                    <p className="card-text">{product.product.product_desc}</p>
                    <p className="card-text text-primary">${product.product.product_price}</p>
                    <a href="#" className="btn btn-primary">add to cart</a>
                </div>
            </div>
        </div>
    );
}

export default ProductListItem;
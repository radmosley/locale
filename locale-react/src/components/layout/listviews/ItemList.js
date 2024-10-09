import '../../styling/ItemList.css';
import ProductListItem from '../../components/product/ProductListItem'
import React from 'react';

function ItemList(props) {
    let products = props.data

    return (
        <div className="row  rol-cols-xsrow-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {products?.map((product) => (
                product.product_stock > 0
                    ?
                    <ProductListItem 
                       product={product}
                       key={product.product_name}
                    />
                    :
                    null
            ))}
        </div>
    );
}

export default ItemList;
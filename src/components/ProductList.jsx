import React from 'react';
import {Row} from "react-bootstrap";
import ProductItem from "./ProductItem";
import {useSelector} from "react-redux";

const ProductList = () => {
    const product = useSelector(state => state.cards)
    return (
        <Row >
            {product.map(item =>
                    <ProductItem
                            key={item.id}
                            props = {item}
                    />
            )}
        </Row>
    );
};

export default ProductList;

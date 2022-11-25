import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();
    console.log(products[0].products);

    return (
        <div>

        </div>
    );
};

export default Products;
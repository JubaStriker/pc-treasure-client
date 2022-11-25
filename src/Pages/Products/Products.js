import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { TiTick } from 'react-icons/ti'

const Products = () => {
    const data = useLoaderData();
    const products = data[0].products
    // console.log(products);
    // console.log(data[0]);


    return (
        <div>
            <h1 className=' text-4xl p-3 lg:p-10'>
                All available {data[0].name}
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl py-6 px-10 mx-auto'>
                {products.map((product) => <div className="card card-compact lg:w-96 bg-base-100 shadow-xl hover:-translate-y-2">
                    <figure><img src={product.picture} alt="Shoes" className='h-80 lg:w-96 sm:w-72' /></figure>
                    <div className="card-body flex justify-start items-start">
                        <h2 className="card-title text-2xl">{product.name}</h2>
                        <p className='text-lg'>Price: {product.resalePrice} ৳</p>
                        <p className='text-lg'>Market price: {product.marketPrice} ৳</p>
                        <p className='text-lg'>Upload time: {product.time} </p>
                        <p className='text-lg'>Used for {product.used} months</p>
                        <div className='flex justify-between'>
                            <p className='text-lg'>Seller: {product.sellerName}</p>
                            {product.isVerified === 'true' && <p><TiTick className='text-green-600 text-xl' /></p>}
                        </div>
                        <p className='text-lg'> Location: {product.location}</p>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Products;
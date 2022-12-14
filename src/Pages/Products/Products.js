import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { TiTick } from 'react-icons/ti'
import BookingModal from './BookingModal';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const Products = () => {

    const [product, setProduct] = useState(null)
    const data = useLoaderData();
    const products = data;
    const { user } = useContext(AuthContext)

    const handleAddWishlist = (product) => {

        product.userEmail = user.email

        fetch('https://pc-treasure-server.vercel.app/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setProduct(null);
                    toast.success('Added to wishlist')
                }
                else {
                    toast.error(data.message);
                }
            })
    }


    return (
        <div>
            <h1 className=' text-4xl p-3 lg:p-10'>
                All available products
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl py-6 px-10 mx-auto'>
                {products.map((product) => <div key={product._id} className="card card-compact lg:w-96 bg-base-100 shadow-xl hover:-translate-y-2">
                    <figure><img src={product.picture} alt="" className='h-80 lg:w-96 sm:w-72' /></figure>
                    <div className="card-body flex justify-start items-start">
                        <h2 className="card-title text-2xl">{product.name}</h2>
                        <p className='text-lg'>Price: {product.resalePrice} ৳</p>
                        <p className='text-lg'>Market price: {product.marketPrice} ৳</p>
                        <p className='text-lg'>Upload time: {product.time} </p>
                        <p className='text-lg'>Used for {product.used} months</p>
                        <div className='flex justify-between'>
                            <p className='text-lg'>Seller: {product.sellerName}</p>
                            {product.isVerified === true && <p><TiTick className='text-green-600 text-xl' /></p>}
                        </div>
                        <p className='text-lg'> Location: {product.location}</p>

                        <div className="card-actions justify-end">
                            <label htmlFor="booking-modal" className="btn text-white bg-gradient-to-r from-primary to-secondary border-0
                        hover:text-gray-200" onClick={() => setProduct(product)}
                            >Book Now</label>
                            <button onClick={() => handleAddWishlist(product)} className="btn text-white bg-gradient-to-r from-primary to-accent border-0
                        hover:text-gray-200">Add to wishlist</button>

                        </div>
                    </div>

                </div>)}

            </div>
            {product && <BookingModal product={product} setProduct={setProduct}></BookingModal>}
        </div>
    );
};

export default Products;
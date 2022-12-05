import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import axios from "axios";
import { TiTick } from 'react-icons/ti'
import { BiTrendingUp } from 'react-icons/bi'

const Home = () => {

    const [categories, setCategories] = useState([])
    const [advertisement, setAdvertisement] = useState([])

    useEffect(() => {
        fetch("https://pc-treasure-server.vercel.app/products")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const url = 'https://pc-treasure-server.vercel.app/advertisement'

    useEffect(() => {
        axios.get(url)
            .then(response => setAdvertisement(response.data))
    }, [])







    return (
        <div className='p-2 lg:p-10'>
            <h1 className=' text-2xl lg:text-4xl text-center font-semibold my-2'>Welcome to <span className='font-mono'>PC Treasure</span></h1>
            <div className='flex flex-col lg:flex-row justify-around items-center'>
                <div>
                    <h2 className=' text-3xl lg:text-6xl font-semibold mt-8 mb-6 text-transparent bg-clip-text bg-gradient-to-tr from-primary to-success'>A secure place  to  <span><Typewriter
                        options={{
                            strings: ['Buy', 'Sell'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></span> your products</h2>
                </div>
                <div className=''>
                    <Player
                        src='https://assets7.lottiefiles.com/private_files/lf30_9kdbftpx.json'
                        className="player w-2/3"
                        loop
                        autoplay
                    />
                </div>

            </div>

            <h1 className='mt-24 text-xl lg:text-5xl text-center text-primary font-medium'>Explore what you need </h1>

            <div className='flex flex-col lg:flex-row justify-center items-center gap-16 my-24'>{
                categories?.map(category =>

                    <div key={category._id} className="relative group flex justify-center items-center h-full w-full">
                        <img className="object-center object-cover h-full w-full" src={category.image} alt="girl" />

                        <button className="bottom-4 z-10 absolute text-base font-medium  text-gray-100 py-3 w-36 ">
                            <Link to={`/category/${category.category}`} ><div className="btn text-white bg-gradient-to-r from-primary to-secondary border-0
                        hover:text-gray-200">{category.name}</div></Link>
                        </button>
                    </div>

                )}

            </div>

            {advertisement.length >= 1 &&
                <section>
                    <h1 className='text-4xl lg:text-7xl font-semibold my-2'>Trending now <BiTrendingUp /></h1>

                    <div className='grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto'>
                        {advertisement.map(product =>
                            <div key={product._id} className="card card-compact lg:w-96 bg-base-100 shadow-xl hover:-translate-y-2 my-20">
                                <figure><img src={product.picture} alt="" className='h-80 lg:w-96 sm:w-72' /></figure>
                                <div className="card-body flex justify-start items-start">
                                    <h2 className="card-title text-2xl">{product.name}</h2>
                                    <p className='text-lg'>Price: {product.resalePrice} ৳</p>
                                    <p className='text-lg'>Market price: {product.marketPrice} ৳</p>
                                    <p className='text-lg'>Upload time: {product.time} </p>
                                    <p className='text-lg'>Used for {product.used} months</p>
                                    <div className='flex justify-between'>
                                        <p className='text-lg'>Seller e-mail: {product.sellerEmail}</p>
                                        {product.isVerified === 'true' && <p><TiTick className='text-green-600 text-xl' /></p>}
                                    </div>
                                    <p className='text-lg'> Location: {product.location}</p>
                                </div>

                            </div>)}
                    </div>
                </section>}


            <div className="w-full p-4 text-center border-0 rounded-lg sm:p-8 mt-32 ">
                <h5 className="mb-2 text-3xl font-bold text-accent ">Find us on</h5>
                <p className="mb-5 text-base text-secondary sm:text-lg ">Stay updated on the move. Get our mobile app</p>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <a href="/" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                        <div className="text-left">
                            <div className="mb-1 text-xs">Download on the</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                        </div>
                    </a>
                    <a href="/" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                        <div className="text-left">
                            <div className="mb-1 text-xs">Get in on</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Home;
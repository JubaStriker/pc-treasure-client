import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='p-2 lg:p-10'>
            <h1 className=' text-4xl lg:text-7xl font-semibold my-2'>Welcome to <span className='font-mono'>PC Treasure</span></h1>
            <div className='flex flex-col lg:flex-row justify-around items-center'>
                <div>
                    <h2 className=' text-3xl lg:text-6xl font-semibold mt-8 mb-6 text-transparent bg-clip-text bg-gradient-to-tr from-primary to-green-800'>A secure place  to  <span><Typewriter
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
                        className="player h- w-2/3"
                        loop
                        autoplay
                    />
                </div>

            </div>

            <h1 className='mt-24 text-4xl text-center text-primary font-medium'>Explore what you need </h1>
        </div>
    );
};

export default Home;
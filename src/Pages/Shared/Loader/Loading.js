import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen ' >
            <div className='flex justify-center items-center my-auto'>
                <Player
                    src='https://assets5.lottiefiles.com/packages/lf20_m2igjaux.json'
                    className="player h-[250px] w-[250px] md:h-[400px] md:w-[400px] mx-auto my-auto"
                    loop
                    autoplay
                />
            </div>
        </div>
    );
};

export default Loading;
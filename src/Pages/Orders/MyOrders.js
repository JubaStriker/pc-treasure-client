import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import Loading from '../Shared/Loader/Loading';
import { Player } from '@lottiefiles/react-lottie-player';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const url = `https://pc-treasure-server.vercel.app/bookings?email=${user?.email}`

    const { data: bookings = [], isFetching, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,);
            const data = await res.json();
            return data;
        }
    })

    if (bookings.length === 0) {
        return <>
            <div className='min-h-screen my-20' >
                <div className='flex flex-col justify-center items-center my-auto'>
                    <Player
                        src='https://assets8.lottiefiles.com/packages/lf20_0s6tfbuc.json'
                        className="player h-[250px] w-[250px] md:h-[400px] md:w-[400px] mx-auto my-auto"
                        loop
                        autoplay
                    />
                    <h1 >You didn't order anything</h1>
                </div>
            </div>
        </>
    }



    const handleDeleteBookings = (id) => {
        console.log('bookings id', id);
        fetch(`https://pc-treasure-server.vercel.app/bookings/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    refetch()
                    toast.success("Delete successful")
                }

            })
    }

    if (isFetching) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-4xl font-semibold my-5 mx-4'>My Orders</h1>
            <div className="overflow-x-auto my-8 mx-4">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='hover'>
                            <th></th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id} className='hover'>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="w-24 mask mask-squircle">
                                        <img src={booking.image} alt='' />
                                    </div>
                                </td>
                                <td>{booking.product}</td>
                                <td>{booking.price}</td>
                                <td>{booking.location}</td>
                                <td><p onClick={() => handleDeleteBookings(booking._id)} className='btn btn-error'>X</p></td>
                                <td></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
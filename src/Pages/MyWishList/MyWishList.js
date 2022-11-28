import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyWishList = () => {

    const { user } = useContext(AuthContext)

    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/wishlist/${user.email}`)
            .then(res => res.json())
            .then(data => setWishlist(data))
    }, [user.email])

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
                            <th>Buy</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            wishlist &&
                            wishlist?.map((w, i) => <tr key={w._id} className='hover'>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="w-24 mask mask-squircle">
                                        <img src={w.picture} alt='' />
                                    </div>
                                </td>
                                <td>{w.name}</td>
                                <td>{w.resalePrice}</td>
                                <td>{w.location}</td>
                                <td><p className='btn btn-primary'>Buy Now</p></td>
                                <td></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyWishList;
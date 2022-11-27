import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ConfirmationModal from './ConfirmationModal';

const MyProducts = () => {

    const [product, setProduct] = useState(null)
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/myproducts?email=${user?.email}`

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    // console.log(products);
    // console.log(user.email);

    const handleAdvertise = (id) => {
        console.log('id: ' + id);
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
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products &&
                            products?.map((product, i) => <tr key={product._id} className='hover'>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="w-24 mask mask-squircle">
                                        <img src={product.picture} alt='' />
                                    </div>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.resalePrice}</td>
                                <td>{product.location}</td>
                                <td><p className='btn btn-error'>X</p></td>
                                <td>
                                    <label htmlFor="my-modal-3" onClick={() => setProduct(product)} className="btn btn-sm btn-accent">Advertise</label>
                                </td>
                                {/* <td><p htmlFor="my-modal-3" onClick={() => setProduct(product)} className='btn btn-sm btn-accent'>Advertise</p></td> */}

                            </tr>)
                        }

                    </tbody>
                    {product && <ConfirmationModal className='hidden' product={product} setProduct={setProduct}></ConfirmationModal>}
                </table>
            </div>
        </div>
    );
};

export default MyProducts;
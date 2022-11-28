import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const DeleteConfirmation = ({ product }) => {

    const { user } = useContext(AuthContext)

    const handleDelete = () => {
        console.log('id: ', product._id);
        fetch(`https://pc-treasure-server.vercel.app/myproducts/${product._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {

                    toast.success("Delete successful")
                    fetch(`https://pc-treasure-server.vercel.app/advertisement/${product.name}?email=${user.email}`, {
                        method: 'DELETE',

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged === true) {

                                toast.success("Removed from advertisement")
                            }

                        })
                }

            })
    }
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Do you really want to delete this product?</h3>
                    <h1 onClick={handleDelete} className='flex justify-center'><p className=" my-4 btn btn-accent">Proceed</p></h1>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;
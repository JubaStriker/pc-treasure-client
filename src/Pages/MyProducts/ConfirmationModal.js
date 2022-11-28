import React from 'react';
import toast from 'react-hot-toast';

const ConfirmationModal = ({ product, setProduct }) => {
    console.log(product);
    const advertiseProduct = {
        category: product.category,
        isVerified: product.isVerified,
        location: product.location,
        marketPrice: product.marketPrice,
        name: product.name,
        picture: product.picture,
        resalePrice: product.resalePrice,
        sellerEmail: product.sellerEmail,
        time: product.time,
        used: product.used,
    }

    const handleAdvertise = () => {
        fetch('https://pc-treasure-server.vercel.app/advertisement', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertiseProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setProduct(null);
                    toast.success('Advertised successfully')
                }
                else {
                    toast.error(data.message);
                }
            })
    }


    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-11/12 max-w-5xl">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Do you want to advertise {product.name} ?</h3>
                    <p className="py-4"><img src={product.picture} alt="" /></p>
                    <p onClick={handleAdvertise} className='flex justify-end'><p className='btn btn-accent'>Proceed</p></p>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
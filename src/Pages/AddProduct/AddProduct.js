import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useVerified from '../../Hooks/useVerified';
import Loading from '../../Pages/Shared/Loader/Loading'

const AddProduct = () => {

    const { user } = useContext(AuthContext)
    const [isVerified, isVerifiedLoading] = useVerified(user.email)
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(intervalId);
    }, []);

    const date = dateTime.toString().slice(4, 15)

    let time = dateTime.toString().slice(16, 24)

    let formDate = time + ", " + date

    const verification = isVerified;
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleSubmit = (event) => {

        event.preventDefault();
        const form = event.target
        const name = form.productName.value
        const image = form.image.files[0];
        const marketPrice = form.marketPrice.value;
        const resalePrice = form.resalePrice.value;
        const used = form.used.value;
        const location = form.location.value;
        const email = form.email.value;
        const sellerName = form.sellerName.value;
        const category = form.category.value;
        const isVerified = verification;
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;


        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url);
                const product = {
                    name: name,
                    category: category,
                    picture: imgData.data.url,
                    location: location,
                    resalePrice: resalePrice,
                    marketPrice: marketPrice,
                    used: used,
                    uploadDate: date,
                    time: time,
                    sellerName: sellerName,
                    sellerEmail: email,
                    isVerified: isVerified
                }
                console.log(product);
                fetch('https://pc-treasure-server.vercel.app/allproducts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        toast.success(`${name} added successfully`)
                        navigate('/dashboard/myproducts')
                    })
            })


    }

    if (isVerifiedLoading) {
        return <Loading />
    }

    return (
        <div className='mb-20'>
            <h1 className='text-4xl font-semibold my-5 mx-4'>Add Products </h1>
            <div className='w-1/2 p-7 mb-20'>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" name="productName"
                            required
                            className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Market Price</span></label>
                        <input type="text" name="marketPrice"
                            required
                            className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Resale Price</span></label>
                        <input type="text" name="resalePrice"
                            required
                            className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Used for</span></label>
                        <input type="text" placeholder='months' name="used"
                            required
                            className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Upload Time</span></label>
                        <input type="text" placeholder='mm:hh AM/PM, dd/mm/yy' name="uploadTime"
                            required disabled defaultValue={formDate}
                            className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" name="location"
                            required className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Phone</span></label>
                        <input type="text" name="phone"
                            required className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" defaultValue={user.email} disabled name="email"
                            required
                            className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Seller Name</span></label>
                        <input type="text" defaultValue={user.displayName} name="sellerName"
                            required
                            className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Category</span></label>
                        <select className="select select-bordered w-full max-w-lg"
                            name="category"
                            required>

                            <option>Gpu</option>
                            <option>Ram</option>
                            <option>Mouse</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" name="image"
                            required
                            className="input w-full max-w-xs" />

                    </div>
                    <input className='btn btn-accent w-full mt-4 hover:text-white hover:bg-lime-500' value="Upload" type="submit" />

                </form>
            </div>
        </div>


    );
};

export default AddProduct;
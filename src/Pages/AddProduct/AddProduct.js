import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddProduct = () => {

    const { user } = useContext(AuthContext)
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleAddProduct = (data) => {
        console.log(data.productName);
        const image = data.image[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        console.log(formData);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {

                    const product = {
                        name: data.productName,
                        category: data.category,
                        picture: imgData.data.url,
                        location: data.location,
                        resalePrice: data.resalePrice,
                        marketPrice: data.marketPrice,
                        used: data.used,
                        time: data.uploadTime,
                        sellerName: data.sellerName,
                        sellerEmail: data.sellerEmail,
                        isVerified: "false"
                    }
                    console.log(product);
                    fetch('http://localhost:5000/allproducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.productName} added successfully`)
                            navigate('/dashboard')
                        })
                }
                console.log('failed to add');
            })
            .catch(errors => { console.log(errors) });

    }

    return (
        <div className='mb-20'>
            <h1 className='text-4xl font-semibold my-5 mx-4'>Add Products </h1>
            <div className='w-1/2 p-7 mb-20'>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("productName", {
                            required: "Product name is Required"
                        })} className="input input-bordered w-full max-w-lg" />
                        {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Market Price</span></label>
                        <input type="text" {...register("marketPrice", {
                            required: "Market price is Required"
                        })} className="input input-bordered w-full max-w-lg" />
                        {errors.marketPrice && <p className='text-red-500'>{errors.marketPrice.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Resale Price</span></label>
                        <input type="text" {...register("resalePrice", {
                            required: "Resale price is Required"
                        })} className="input input-bordered w-full max-w-lg" />
                        {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Used for</span></label>
                        <input type="text" placeholder='months' {...register("used", {
                            required: "Field is Required"
                        })} className="input input-bordered w-full max-w-lg" />
                        {errors.used && <p className='text-red-500'>{errors.used.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Upload Time</span></label>
                        <input type="text" placeholder='mm:hh AM/PM, dd/mm/yy'{...register("uploadTime", {
                            required: "Upload Time is Required"
                        })} className="input input-bordered w-full max-w-lg" />
                        {errors.uploadTime && <p className='text-red-500'>{errors.uploadTime.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Location is Required"
                        })} className="input input-bordered w-full max-w-lg" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Phone</span></label>
                        <input type="text" {...register("phone", {
                            required: "Phone no. is Required"
                        })} className="input input-bordered w-full max-w-lg" />
                        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" defaultValue={user.email} disabled {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-lg" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Seller Name</span></label>
                        <input type="text" defaultValue={user.displayName} {...register("sellerName", {
                            required: true
                        })} className="input input-bordered w-full max-w-lg" />
                        {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label"> <span className="label-text">Category</span></label>
                        <select className="select select-bordered w-full max-w-lg"
                            {...register("category", {
                                required: true
                            })}>
                            <option>Gpu</option>
                            <option>Ram</option>
                            <option>Mouse</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "Photo is Required"
                        })} className="input w-full max-w-xs" />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Upload" type="submit" />

                </form>
            </div>
        </div>


    );
};

export default AddProduct;
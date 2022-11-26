import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';

const AddProduct = () => {

    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddDoctor = (data) => {
        console.log(data);
    }

    return (
        <div className='mb-20'>
            <h1 className='text-4xl font-semibold my-5 mx-4'>Add Products </h1>
            <div className='w-1/2 p-7 mb-20'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                        <label className="label"> <span className="label-text">Upload Time</span></label>
                        <input type="text" {...register("uploadTime", {
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
                        <input type="email" defaultValue={user.email} {...register("email", {
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
                            {...register("specialty", {
                                required: true
                            })}>
                            <option>Graphics Card</option>
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
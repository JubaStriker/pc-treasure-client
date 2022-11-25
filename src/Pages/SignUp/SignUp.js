import { Player } from '@lottiefiles/react-lottie-player';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';




const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUPError] = useState('');
    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
    }
    return (
        <div className='my-16 lg:my-32 flex justify-center items-center'>
            <div className=' flex lg:flex-row flex-col justify-center items-center gap-5'>
                <div className='w-96 p-7'>
                    <h2 className='text-3xl text-center font-bold text-green-600'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input type="text" {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="email" {...register("email", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input type="password" {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Account type</span></label>
                            <select {...register("type", {
                                required: true
                            })} className="select select-bordered w-full max-w-xs">

                                <option>Seller</option>
                                <option>Buyer</option>
                            </select>
                        </div>
                        <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </form>
                    <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

                </div>
                <Player
                    src='https://assets5.lottiefiles.com/packages/lf20_kdCeeh2u4M.json'
                    className="player h-96"
                    loop
                    autoplay />
            </div>
        </div>
    );
};

export default SignUp;


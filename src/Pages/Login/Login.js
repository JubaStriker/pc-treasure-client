import { Player } from '@lottiefiles/react-lottie-player';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, providerLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                const name = user.displayName;
                const email = user.email;
                const role = 'Buyer';
                saveGUser(name, email, role)
                setLoginError('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error('Error', error);
                setLoginError(error.message);
            });

    }
    const saveGUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://pc-treasure-server.vercel.app/gusers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/')

            })
    }

    return (
        <div className='my-16 lg:my-32 flex justify-center items-center'>
            <div className='w-full p-7 flex gap-10 flex-col md:flex-row justify-center items-center'>
                <div className=''>
                    <h2 className='text-3xl text-center font-bold text-green-600'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="text"
                                {...register("email", {
                                    required: "Email Address is required"
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label"> <span className="label-text">Forget Password?</span></label>
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn btn-accent w-full' value="Login" type="submit" />
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    </form>
                    <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
                <Player
                    src='https://assets5.lottiefiles.com/packages/lf20_xlmz9xwm.json'
                    className="player h-96"
                    loop
                    autoplay />
            </div>
        </div>
    );
};

export default Login;
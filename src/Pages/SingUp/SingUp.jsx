import axios from 'axios';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const SingUp = () => {
    const [users, setUsers] = useState([]);

    // navigate
    const navigate = useNavigate();
    // google loign
    const { googleLogin, createUser, updateUserProfile } = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();

    // error state set
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const userRole = form.userRole.value;
        // console.log(name, photoURL, email, password);

        // create user email and password
        createUser(email, password)
            .then(result => {
                const user = result.user;
                axios.post(`${process.env.REACT_APP_SERVER_URL}/users/create`, {
                    userId: user?.uid,
                    role: userRole,
                    name,
                    email
                }).then(res => {
                    console.log('user', res.data)
                    navigate('/login')
                }).catch(err => console.log(err))
                // form.reset();
                setError('');
                handleUpdateUserProfile(name, photoURL);
                // handleEmailVerifiction();
                toast.success('Account Create Successfully!!')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    // user profile update
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => {
                // Profile updated!

            }).catch((error) => {
                console.log(error);
            });
    }

    // google login
    const handleGoogleSingIn = () => {
        googleLogin(googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log('error', error.message))
    }

    // get all users
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/users/get-users`).then(res => {
            setUsers(res.data);
        }).catch(err => console.log(err))
    }, [])

    return (
        <div className='flex justify-center items-center py-5'>
            <div className='flex flex-col max-w-md p-4 rounded-md sm:p-10 bg-gray-900 text-gray-200'>
                <div className='mb-4 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Register</h1>
                    <p className='text-sm text-gray-400'>Create a new account</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-12 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='name' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Full Name'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor='photoURL' className='block mb-2 text-sm'>
                                Photo URL
                            </label>
                            <input
                                type='text'
                                name='photoURL'
                                id='photo'
                                placeholder='Enter Your PhotoURL'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                                required
                            />
                        </div>


                        <div>
                            <label htmlFor='photoURL' className='block mb-2 text-sm'>
                                User Role
                            </label>

                            <select name='userRole' className='select w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'>
                                <option value="seller">Select Role</option>
                                {users?.length === 0 && <option value="admin">Admin</option>}
                                <option value="seller">Seller</option>
                                <option value="buyer">Buyer</option>
                            </select>


                        </div>

                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                                required
                            />
                        </div>
                        <div>
                            <div className='flex justify-between mb-2'>
                                <label htmlFor='password' className='text-sm'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                                required
                            />
                        </div>
                    </div>
                    <p className='text-warning'> {error} </p>
                    <div className='space-y-2'>
                        <div>
                            <button
                                type='submit'
                                className='w-full px-8 py-3 font-semibold rounded-md bg-gray-500 hover:bg-gray-700 hover:text-white text-gray-100'
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 bg-gray-700'></div>
                </div>
                <div className='flex justify-center space-x-4'>
                    <button onClick={handleGoogleSingIn} aria-label='Log in with Google' className='p-3 rounded-sm'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 32 32'
                            className='w-5 h-5 fill-current'
                        >
                            <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                        </svg>
                    </button>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account yet?{' '}
                    <Link to='/login' className='hover:underline text-gray-100'>
                        Sign In
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default SingUp;
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const CategoryAdded = () => {
    useTitle('Add-Category')
    const [name, setName] = useState("");

    // submit hanlder
    const submitHandler = (e) => {
        console.log('hello')
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_SERVER_URL}/categories/add-category`, {
            name
        }).then(data => {
            if (data?.data?._id) {
                toast.success("Category Created Succesfully!!")
                setName("");
            }
        }).catch(err => console.log(err))
    }
    return (
        <section className="text-white">
            <div className="space-y-2 col-span-full lg:col-span-1 text-center mb-5">
                <p className="font-bold text-2xl text-cyan-500 ">Add Category </p>
            </div>
            <form onSubmit={submitHandler} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="w-3/4 mx-auto p-6 rounded-md shadow-sm bg-gray-900">

                    <div >
                        <div className="col-span-full sm:col-span-3">
                            <label for="firstname" className="text-sm">Name</label>

                            <input
                                name='name' type="text" placeholder="name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 input input-bordered" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className='btn btn-secondary text-white mt-5 text-center'>Add Category</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default CategoryAdded;
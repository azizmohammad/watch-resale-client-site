import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Contact = () => {
    useTitle('Contact')
    return (
        <section className='py-12 bg-gray-900'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='text-center'>
                        <h3 className='text-secondary font-bold text-xl'>Contact Us</h3>
                        <h1 className='text-white font-bold text-3xl'>Stay connected with us</h1>
                        <form>
                            <input name='email' type="email" placeholder="Email Address" className="input input-bordered input-primary w-full  mt-8" />
                            <input name='subject' type="text" placeholder="Subject" className="input input-bordered input-primary w-full  mt-5 block" />
                            <textarea name='message' type="text" placeholder="Your message" className="input input-bordered input-primary w-full  mt-5 pt-3 h-28" />

                            <input type="submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary mx-auto text-white mt-10 block" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
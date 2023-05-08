import React from 'react';

const About = () => {
    return (
        <>
            <h2 className='capitalize text-4xl text-secondary text-center font-bold mb-6 md:my-8 p-4 '> About Us</h2>

            <div className="hero lg:card-side flex-col lg:flex-row-reverse lg:px-10  mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 bg-white p-[70px]'>
                        <h2 className="capitalize font-bold text-2xl w-auto text-blue-600 mb-5">WINGATE'S QUALITY WATCHES</h2>
                        <p>
                            Wingate’s Quality Watches offers the finest luxury watches at competitive prices with exceptional customer service. We guarantee that every watch we sell is authentic. We provide prompt delivery to our customers worldwide since 1976.
                        </p>
                    </div>
                    <div className='w-1/2 lg:ml-5 bg-yellow-500 rounded-md p-10'>
                        <h1 className="capitalize font-bold text-5xl w-auto text-blue-600">BUSINESS PRINCIPLES</h1>
                        <p className="py-6 text-white">For more than 38 years, our fundamental business principles and service have remained constant: Respect, Trust, Honesty, Dependability, Integrity, Quality and Value! Specializing in major luxury brands as Rolex, Patek Philippe, Cartier, Audemars Piguet, Vacheron & Constantin, Chopard and many other fine brands makes us stand out above the competition.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
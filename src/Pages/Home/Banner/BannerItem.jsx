import React from 'react';

const BannerItem = ({ slide }) => {

    const { image } = slide;

    return (
        <div className=" w-full mt-8">
            <div className='carousel-img'>
                <img src={image} className="w-full rounded-2xl" alt='img1' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 left-24 top-1/4">
                <h1 className='lg:text-6xl text-2xl md:4xl font-bold text-white capitalize'>
                    Top 10 Best Websites to Buy Watches Online
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/3 lg:w-2/5 md:1/2 w-3/4 left-24 top-1/2">
                <p className='lg:text-lg font-semibold text-white'>
                    We wanted to provide you with our Top 10 Best Websites to Buy Watches Online. On this list, you will find many website options to get to the watch of your dreams.
                </p>
            </div>

            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 
            top-3/4 lg:mt-0 mt-6">
                <button className="btn bg-orange-600 text-gray-50 border-transparent hover:bg-transparent hover:text-white hover:border-orange-500 mr-5">See More</button>


                <button className="btn border-gray-50 text-gray-100 hover:bg-orange-600 hover:text-white hover:border-transparent bg-transparent">Latest Watch</button>
            </div>

        </div>
    );
};

export default BannerItem;
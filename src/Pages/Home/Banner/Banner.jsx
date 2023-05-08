import React from 'react';
import './Banner.css'
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, } from 'swiper';
import SwiperCore, { Autoplay } from "swiper";
import BannerItem from './BannerItem';
import img1 from '../../../assete/watch-slider/banner1.png'
import img2 from '../../../assete/watch-slider/banner1.png'
import img3 from '../../../assete/watch-slider/banner1.png'
import img4 from '../../../assete/watch-slider/banner1.png'

const bannerData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 3
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 1
    },
]

const Banner = () => {
    SwiperCore.use([Autoplay]);
    return (
        <Swiper
            autoplay={{
                delay: 4000,
            }}
            modules={[Navigation,]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {
                bannerData.map(slide => <SwiperSlide key={slide.id}>
                    <BannerItem
                        slide={slide}
                    ></BannerItem>
                </SwiperSlide>)
            }
        </Swiper>
    );
};

export default Banner;
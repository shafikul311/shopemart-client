import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'
import './Slider.css'
function Slider () {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='swiper p-10 m-10 '
      >
        <SwiperSlide className='swiper-slide'>
          <div className='relative'>
            <img
              width='100%'
              src='https://nest.apexcode.info/media/ads/middlebar/banner-3.png'
              alt='14 pro max'
            />
            <div className='absolute top-[50%] left-[10%] space-y-5'>
              <h1 className='text-4xl text-bold'>Don’t miss amazing </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
                porro?
              </p>
              <button className='btn btn-accent'>Subscribe Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='relative'>
            <img
              width='100%'
              src='https://nest.apexcode.info/media/ads/middlebar/banner-3.png'
              alt='14 pro max'
            />
            <div className='absolute top-[50%] left-[10%]'>
              <h1 className='text-4xl text-bold'>Don’t miss amazing </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
                porro?
              </p>
              <button className='btn btn-accent mt-5'>Subscribe Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider

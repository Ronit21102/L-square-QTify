import React, { useEffect } from 'react'
import 'swiper/css'
import {Navigation} from 'swiper/modules'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import styles from './Carousal.module.css'
import CarousalLeft from './CarousalLeft/CarousalLeft'
import CarousalRight from './CarousalRight/CarousalRight'

const Controls = ({data}) => {
  let swiper = useSwiper();
  console.log(swiper)
  useEffect(() => {
      // swiper.slideTo(0)
  },[data])

  return <></>
}

const Carousel = ({data,renderCardComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper initialSlide = {0} modules={{Navigation}} slidesPerView={'auto'} spaceBetween={40} allowTouchMove>
           < Controls data={data} /> 
            <CarousalLeft />
            <CarousalRight />
            {data.map(item => (
                <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Carousel
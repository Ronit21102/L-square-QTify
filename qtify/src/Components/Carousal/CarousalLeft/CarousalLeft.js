import React from "react";
import { useState,useEffect } from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as LeftArrow} from '../../../assets/leftArrow.svg'
import styles from './CarousalLeft.module.css'


const CarousalLeftNavigation=()=>{
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange",()=>{
            setIsBeginning(swiper.isBeginning)
        })
    })

    return(
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
        </div>
    )
}

export default CarousalLeftNavigation;
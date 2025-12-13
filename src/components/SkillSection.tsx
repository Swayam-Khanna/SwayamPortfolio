"use client";
import React from 'react'
import styles from "../styles/SkillSection.module.css";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./ProjectSwiper.css";
import {EffectCoverflow,Pagination} from "swiper/modules";
const ProjectSection = () => {
  return (
    <div className={styles.projectdiv}>
      <h1>My Skills</h1>
      <div className='projectswipercontainer'></div>
       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       <SwiperSlide>
         <div className={styles.projectcard}>
          <h1>HTML</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>CSS</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>JS</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>Linux</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>C Programming</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className={styles.projectcard}>
          <h1>C++</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>JAVA</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>Node.js</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>Express.js</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>MongoDB</h1>
         </div>
        </SwiperSlide><SwiperSlide>
           <div className={styles.projectcard}>
          <h1>Data Structure & Allgoforhtms</h1>
         </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProjectSection

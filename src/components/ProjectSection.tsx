"use client";
import React from 'react'
import styles from "../styles/ProjectSection.module.css";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./ProjectSwiper.css";
import {EffectCoverflow,Pagination} from "swiper/modules";
const ProjectSection = () => {
  return (
    <div className={styles.projectdiv}>
      <h1>My Projects</h1>
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
          <h1>Smart Attendance System</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>BitShareMern</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>Smart Supply-AI Food Chain Management System</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>Real-Time Chat Application</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>Multer-File Management API</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className={styles.projectcard}>
          <h1>Student Management System With Pagination</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>Company Management System Using MongoDB</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>University Approval System</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className={styles.projectcard}>
          <h1>Event Management System using Mongoose</h1>
         </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProjectSection

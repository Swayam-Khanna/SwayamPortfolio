import React from 'react'
import styles from '../styles/PortfolioSection.module.css';
import mainImg from '../assets/hj_mainimg.png';
import Image from 'next/image';
const PortfolioSection = () => {
  return (
    <div className={styles.section1outer}>
      <div className={styles.subtextdiv}>
        <div className={styles.left}>
          <div className={styles.about}>
            <p>Hi, I am  <span>Swayam Khanna</span></p>
            <p>I build full stack websites and chat application,I will solve all your business problems.I am open to freelance work.</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.stat}>
            <h1>50+</h1>
            <p>Days Badge<br></br>on LeetCode</p>
          </div>
          <div className={styles.stat}>
            <h1>100+</h1>
            <p>Working on <br></br>Data Structure <br></br>& Algorithms</p>
          </div>
        </div>
      </div>
      <Image src={mainImg} className={styles.mainimg} alt="mainImg" quality={75}/>
      <div className={styles.maintextdiv}>
        <p>I am a</p>
        <h1><span></span>FULL STACK</h1>
        <h2>Developer</h2>
      </div>
      <video src={'/smoke1.mp4'} autoPlay loop muted className={styles.smokevideo}/>
    </div>
  )
}

export default PortfolioSection

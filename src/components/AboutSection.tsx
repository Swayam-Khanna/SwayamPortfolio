import React from 'react'
import styles from "../styles/AboutSection.module.css";
import AboutImg from "../assets/about-img.png";
import Image from 'next/image';
const AboutSection = () => {
  return (
    <div className={styles.about}>
      <div className={styles.textdiv}>
        <h1>About me</h1>
        <p>I am a full stack developer</p><p>Motivated Computer Science student at Chitkara University, Himachal Pradesh
 with expertise in programming, AI, and backend development.</p><p> Skilled in C, C++, Java,
JavaScript, React, Node.js, MongoDB, and system design, actively practicing DSA on LeetCode,
seeking opportunities to apply technical and leadership skills in software and AI projects.</p>
      </div>
      <Image src={AboutImg} alt="aboutimg" quality={100}/>
    </div>
  )
}

export default AboutSection
// I am a Full Stack Developer with a strong foundation in programming, backend development, and problem solving. I build scalable web applications and real-time systems using modern technologies.

//Skilled in C, C++, Java, JavaScript, React, Node.js, and MongoDB, with a solid understanding of system design fundamentals. 
// actively practice Data Structures and Algorithms and continuously
 //work on improving my development and architectural skills.
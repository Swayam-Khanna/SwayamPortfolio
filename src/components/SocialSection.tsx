"use client";

import React from 'react';
import styles from "../styles/SocialSection.module.css";
import { SocialIcon } from 'react-social-icons';

const SocialSection = () => {
  return (
    <div className={styles.social}>
      <div
        className={styles.socialcard}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/swayam-khanna-5911022a6/",
            "_blank"
          )
        }
      >
        <SocialIcon
          url="https://linkedin.com"
          style={{ height: 40, width: 40 }}
        /><p>Swayam Khanna</p>
      </div>
      <div className={styles.socialcard}
      onClick={()=>window.open("https://mail.google.com/mail/u/0/#inbox?compose=new","_blank")}>
        <SocialIcon
          url="https://mail.goggle.com"
          style={{ height: 40, width: 40 }}
        /><p>khannaswayam1@gmail.com</p>
      </div>
       <div className={styles.socialcard}
      onClick={()=>window.open("https://github.com/Swayam-Khanna","_blank")}>
        <SocialIcon
          url="https://github.com"
          style={{ height: 40, width: 40 }}
        /><p>Swayam-Khanna</p>
      </div>
    <div className={styles.socialcard}
      onClick={()=>window.open("https://codolio.com/profile/oisYNfE","_blank")}>
        <SocialIcon
          url="https://codolio.com"
          style={{ height: 40, width: 40 }}
        /><p>SwayamKhanna@Codolio</p>
      </div>
    
    </div>
  );
};

export default SocialSection;

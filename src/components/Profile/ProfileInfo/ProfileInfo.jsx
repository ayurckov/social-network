import React from "react";
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
          alt=""  
        />
      </div>
      <div className={styles.description}>ava + descrtiption</div>
    </div>
    
  );
};

export default ProfileInfo;
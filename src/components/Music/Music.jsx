import React from "react";
import styles from './Music.module.css';

const Music = (props) => {
    return (
        <div className={styles.treks}>
            <div className={styles.trek}>Трек 1</div>
            <div className={styles.trek}>Трек 2</div>
        </div>
    )
};

export default Music
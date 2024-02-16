import React from 'react'
import styles from "./PosterChunk.module.css"
import Poster from "../../assets/images/poster.png"
import Lock from "../../assets/icons/lock.svg";
import { useWidth } from "../../context/widthContext";

export default function PosterChunk() {
  const screenWidth = useWidth();
  return (
    <div className={screenWidth<767 ? "remove" : ""}>
      <div className={styles.poster}>
          <div className={styles.focusParts}>
              <img src={Poster} alt="poster" />
              <h3>Pocket Notes</h3>
              <p>Send and receive messages without keeping your phone online.
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
          </div>
          <div className={styles.endLine}>
              <span><img src={Lock} alt="lock"/> end-to-end encrypted</span>
          </div>
      </div>
    </div>
  )
}

// this section is Rightside  posterArea of Pocket Notes App
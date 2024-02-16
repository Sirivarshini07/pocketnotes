import React from "react";
import styles from "./NoteSlip.module.css";

export default function NoteSlip({ content, date, time }) {
  return (
    <div className={styles.noteSlip}>
      <p>{content}</p>
      <div className={styles.dateTime}>
        <p>
          {date}&nbsp; <span>&#8226;</span> &nbsp;{time}
        </p>
      </div>
    </div>
  );
}

//this section as individual note slip created along with date&time of creation

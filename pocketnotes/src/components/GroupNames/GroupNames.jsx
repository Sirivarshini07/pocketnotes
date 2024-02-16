import React from "react";
import styles from "./GroupNames.module.css";

export default function GroupNames({
  groupName,
  bgColour,
  fontColor = "#000000",
}) {
  // spliting group name by whitespaces and then conerting first character of each word to uppercase
  const groupNameSplit = groupName.split(' ');
  const GroupNameTrim =
    groupNameSplit[0].charAt(0).toUpperCase() +
    (groupNameSplit[1] ? groupNameSplit[1].charAt(0).toUpperCase() : "");

  return (
    <div className={styles.groupName}>
      <div
        className={styles.groupNameTrim}
        style={{ backgroundColor: bgColour }}
      >
        {GroupNameTrim}
      </div>
      <h3 style={{ color: fontColor }}>{groupName}</h3>
    </div>
  );
}

// this section as individual groupname displayed at left side of pocket notes app

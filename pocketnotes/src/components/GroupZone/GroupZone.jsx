import React from "react";
import styles from "./GroupZone.module.css";
import GroupNames from "../GroupNames/GroupNames";
import { useParams , Link } from "react-router-dom";
import { useWidth } from "../../context/widthContext";


const selected = {
  backgroundColor:"#2f2f2f2b",
  borderRadius: "1rem",
};

export default function GroupZone({ groups, TriggerCreateGroup }) {
    const {groupId} =useParams();
    const screenWidth = useWidth();

  return (
  <div className={`${styles.groupZone} ${groupId && screenWidth<767 ? "remove" : ""}`}>
    <div className={styles.title}>
          <span>Pocket Notes</span>
    </div>
    <div className={styles.groupsBox}>
        {groups?.map((group)=>(
            <div key={group.groupId} style={group.groupId===groupId? selected :{}}>
                <Link to={`/notes/${group.groupId}`} replace={screenWidth<767 ? false : true}>
                    <GroupNames groupName={group.groupName} bgColour={group.bgColour} />
                </Link>
            </div>
        ))}
    </div>
    <button className={styles.addButton} title=" Click To Add Group" onClick={TriggerCreateGroup}>+</button>

  </div>);
}


//this section as names of all saved groups and has a trigger button to open modal 
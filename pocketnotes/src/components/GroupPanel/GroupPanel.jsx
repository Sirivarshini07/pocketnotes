import React, { useEffect, useState } from 'react'
import styles from "./GroupPanel.module.css"
import GroupZone from '../GroupZone/GroupZone'
import CreateGroup from '../CreateGroup/CreateGroup'

export default function GroupPanel({children}) {
    // state to manage all the groups and display saved groups
    const [groups, setGroups] = useState([])
    const [viewCreateGroup, setViewCreateGroup]=useState(false);

    //fetching all saved groups from local storage set those to groups
    useEffect(()=>{
        const savedGroups =JSON.parse(localStorage.getItem('groups'));
        if(savedGroups && savedGroups.length >0 ) setGroups(savedGroups);
        
    },[])

    // inserting newgroup to localstorage
    const insertGroup =(newGroup)=>{
        setGroups((prev)=>[...prev,newGroup])
        localStorage.setItem('groups', JSON.stringify([...groups,newGroup]));
        setViewCreateGroup(false);
    }
  return (
    <div className={styles.pageContainer}>
        <GroupZone groups={groups} TriggerCreateGroup={()=>setViewCreateGroup(true)} />
        {children}
        {viewCreateGroup && 
            <div className={styles.createGroupModal} onClick={()=>setViewCreateGroup(false)}>
               <CreateGroup groups={groups} insertGroup={insertGroup} />
           </div>
        }
    </div>
  )
}


//this section acts as panel for the application which as details of all the saved groups and aids in creating new group
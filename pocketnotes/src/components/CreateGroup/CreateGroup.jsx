import React, {  useMemo, useState } from 'react'
import styles from "./CreateGroup.module.css"


//colors array
const coloursSet=["#B38BFA","#FF79F2","#43E6FC","#F19576","#0047FF","#6691FF"]

export default function CreateGroup({groups,insertGroup}) {

    //states to control group(name,color,errors)
    const [groupName, setGroupName]=useState("");
    const [groupColour,setGroupColour]=useState("");
    const [nameError,setNameError]=useState("");
    const [colourError,setColourError]=useState(false);


    //url friendly version of string ex: hello world output: hello-world
    const convertToSlug =(value)=>{
        if(value && typeof value==="string")
        return value.trim().toLowerCase().replace(/[^a-zA-Z\d]+/g, "-");
    }

    // extracting groupId from all the groups so that it can be compared when user entered groupname
    const groupIds = useMemo(()=>{
        return groups.map((group)=>group.groupId)
    },[])

    //checking groupname already taken or not if taken show error
    const handleGroupNameChange=((event)=>{
        setGroupName(event.target.value)
        !groupIds.includes(convertToSlug(event.target.value)) ? (nameError && setNameError(""))  : setNameError("Name already taken!");

    })
  
    // when submited checking error handling by setting flag and if no error found pass data to insert 
    const handleSubmitGroup= ()=>{
        let error =false;
        if(groupColour === ""){
            setColourError(true)
            error =true;
        }
        if(groupName.trim().length===0){
            setNameError("Please provide name!")
            error =true;
        }
        else if(nameError) error =true;

        if(error) return 

        const newGroup ={
            groupName : groupName.trim(),
            groupId:convertToSlug(groupName),
            bgColour: groupColour
        }
        insertGroup(newGroup);
    }
  return (
    <div className={styles.createGroup} onClick={(event)=>event.stopPropagation()} >
        <h3>Create New group</h3>
        <div className={styles.input}>
            <label htmlFor='group-name'>Group Name</label>
           <input type="text" placeholder='Enter group name' name='groupName' id="group-name" value={groupName} onChange={handleGroupNameChange} maxLength={15}/>
            {nameError && <p className={styles.error}>{nameError}</p>}
        </div>
        <div className={styles.input}>
            <label htmlFor='group-colour'>Choose colour</label>
            <div className={styles.coloursSet} id="group-colour">
                {coloursSet.map((colour)=>(
                    <div key={colour} style={{backgroundColor:colour}} className={colour === groupColour? styles.picked:""} onClick={()=>setGroupColour(colour)}></div>
                ))}
            </div>
            {(colourError && !groupColour) && <p className={styles.error}>Please select colour!</p>}
        </div>
        <button className={styles.createButton} onClick={handleSubmitGroup}>Create</button>
    </div>
  )
}


// this section is to creategroup by adding groupname and groupcolour
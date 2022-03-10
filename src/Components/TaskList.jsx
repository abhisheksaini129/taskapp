import React from 'react'
import {Button} from '@mui/material/';
import './style/TaskList.css';
import { useState,useEffect } from 'react';
const TaskList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
        getList();
       // setItem();
    }, [list]);

   const getList = () => {

        fetch(`https://taskap1.herokuapp.com/`)
            .then(data => data.json())
            .then(result => {
                setList(result);
            });
    };

    const   handleRemove =  (e) => {
      const {title,value} = e.target;
      console.log("title = ",title,"value = ",value);

      let obj = {
        [title]: value
      }
     removeItem(obj);
    };
    async function removeItem(Item){
   
    await fetch("https://taskap1.herokuapp.com/", {
         method: "DELETE",
         body:JSON.stringify(Item),
         headers: {
              "content-type": "application/json"
          }
      })
  }

    return (
      <div className='task-container'>
        <p>Your Tasks</p>
      {list.map((item,i) => (
            <div className="task" >
            <p>{i+1}. {item.description}</p>
            <div className="buttonarea">
            <Button variant="contained" >Completed</Button>
            <Button variant="contained" className='delBtn' title="title" value={item.title} onClick={handleRemove}>Delete</Button>
            </div>
            </div>
      ))}
    </div>
    )
}
export default TaskList;
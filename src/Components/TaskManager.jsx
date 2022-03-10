import React from 'react'
import { useState ,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material/';
import './style/TaskManager.css'
function TaskManager() {
  const [form, setForm] = useState(null);
  useEffect(() => {
    
}, [form]);
  const handleChange = (e) => {
     const {name, value} = e.target;
     setForm({
         ...form,
         [name]: value, 
     })
  }
  const handleSubmit = (e) => {
    console.log(form);
    fetch("https://taskap1.herokuapp.com/", {
       method: "POST",
       body:JSON.stringify(form),
       headers: {
            "content-type": "application/json"
        }

    })
};
  return (
  <>    
    <div className='taskcreate'>
      <p className='para'>Task Manager</p>
    <Box component="form" autoComplete="off" >
      <div className='textfield'>
        <TextField id="outlined-name input " name="title" label="Task Title"onChange={handleChange}/>
        <TextField id="outlined-search input descr" className="description" name="description" label="Task Description"  onChange={handleChange}/>
        <TextField id="date"  type="date" InputLabelProps={{ shrink: true, }} />
        <Button variant="contained"  onClick={handleSubmit}>Create  Task</Button>
      </div>
    </Box>  
    </div>
    </>
  )
}

export default TaskManager;
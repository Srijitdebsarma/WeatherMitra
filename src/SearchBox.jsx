import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function SearchBox({city,setCity,handleSubmit}) {
    let handleChange=(event)=>{
        setCity(event.target.value);    //typed text stored in city variable
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange}/>
        <br/><br/>
        <Button variant="contained" type='submit'>Search</Button>
      </form>
    </div>
  )
}


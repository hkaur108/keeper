import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ClickedContext } from './UI';
import { useContext } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function Form() {
  const clickContext= useContext(ClickedContext);
  const [clicked,setclicked,getdata,setgetdata,recdata,setrecdata]=clickContext;
  const {title,note}=getdata;
  const [showValue,setshowValue]=useState(false);
  
  const handleClick =()=>{
    setclicked(true)
  }

  
  const handleSubmit=(e)=>{
    e.preventDefault()
    setclicked(false)
    setgetdata({title:"",note:""})
    setrecdata((recdata)=>{
      const updatedrec=[...recdata ,getdata];
      console.log(updatedrec)
      return updatedrec;

    })
    setshowValue(true)
    console.log(recdata)

  }
  return (
    <>
    <div className='d-flex align-items-center justify-content-center mt-5' >
      <form onSubmit={handleSubmit} style={{width:'500px', boxShadow:"0px 0px 5px 5px #E1D7C6"}}>
        
        {clicked && 
        <input 
        maxLength={25}
        required
        autoComplete='off'
        type="text" 
        placeholder='title' 
        className='text-capitalize px-2 w-100 fw-bold text-dark' 
        name='title'
        value={getdata.title}
        onChange={(e)=>setgetdata({...getdata, id:uuidv4(),[e.target.name]:e.target.value})}
        style={{border:"none",outline:"none"}}/>}

        <input type="text" 
        required
        maxLength={40}
        autoComplete='off'
        name='note'
        value={getdata.note}
        placeholder='Take a note...'
        className="p-2 w-100 "
        onClick={handleClick}
        onChange={(e)=>setgetdata({...getdata,id:uuidv4(),[e.target.name]:e.target.value})}
  
        style={{border:"none" , outline:"none",boxShadow:"none"}}/>

        {clicked && 
        ( <input type="submit" className='btn btn-sm w-100 bg-white' style={{outline:"none", border:"none",}} value={"Close"}/>)
        }
      </form>
    </div>



          </>
  )
}


        // <button type='submit' className='btn btn-light btn-sm btn-block w-100' style={{outline:"none", border:"none"}} >Close</button>}

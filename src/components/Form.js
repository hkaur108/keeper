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
    <div className='d-flex align-items-center justify-content-center mt-5'>
      <form onSubmit={handleSubmit} action=""style={{width:'500px', boxShadow:"0px 0px 5px 5px #DDDDDD",borderRadius:"10px",}}>
        
        {clicked && 
        <input 
        type="text" 
        placeholder='title' 
        className='text-capitalize px-2 w-100 fw-bold text-dark' 
        name='title'
        value={getdata.title}
        onChange={(e)=>setgetdata({...getdata, id:uuidv4(),[e.target.name]:e.target.value})}
        style={{border:"none",outline:"none"}} />}

        <textarea type="text" 
        name='note'
        value={getdata.note}
        placeholder='Take a note...'
        className="p-2 w-100 "
        onClick={handleClick}
        onChange={(e)=>setgetdata({...getdata,id:uuidv4(),[e.target.name]:e.target.value})}
        rows={2}
        cols={45}
        style={{border:"none" , outline:"none",boxShadow:"none",}}/>

        {clicked && <button type='submit' className='btn btn-light btn-sm btn-block w-100' >Close</button>}
      </form>
    </div>



          </>
  )
}

import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../App.css";
import { ClickedContext } from './UI';
import { useContext } from 'react';
import { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateIcon from '@mui/icons-material/Create';


export default function Note(props) {
    const {title,note,id}=props.value;
    const clickContext= useContext(ClickedContext);
    const [clicked,setclicked,getdata,setgetdata,recdata,setrecdata]=clickContext;
    const [checked,setchecked] =useState(false)

    const handleDelete=(id)=>{
        let remainingData= recdata.filter((item)=>{
            return(
                item.id!==id
            )

        })
        setrecdata(remainingData)
        console.log(recdata)
    }

    const handleEdit=(id)=>{
        const singleItem= recdata.find((item)=>{
            return(
                item.id===id
            )
            
        })
        setgetdata(singleItem)
        handleDelete(singleItem.id)

    }

    const handleSubmit=(e)=>{
        e.preventDefault();

    }

  return (
    <div>
        <form type="submit" 
        onSubmit={handleSubmit} 
        action="" 
        className='bg-light d-flex flex-column align-items-center justify-content-center mt-3 textarea1 p-2' 
        style={{ width:"270px", boxShadow:"0px 0px 5px 5px #DDDDDD",borderRadius:"10px",}}>
        <h5>{title}</h5>
        <textarea 
        value={note}
        name="data"
        style={{ border:"none" , outline:"none",boxShadow:"none",}}
        rows={3}
        className={(checked)?"textLine text-center w-100":"text-center w-100"}
        >
        </textarea>
        <div className='container'>
            <div className="row">
                <div className="col-4 d-flex justify-content-center">
                    <button type='button' className='btn btn-sm' onClick={()=>handleDelete(id)}>< DeleteForeverIcon/></button>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <input type="checkbox" style={{width:"20px"}} onClick={()=>setchecked(!checked)} />
                </div>
                <div className="col-4 d-flex justify-content-center">
                <button type='button' className='btn btn-sm' onClick={()=>handleEdit(id)}><CreateIcon/></button>
                </div>
            </div>
        </div>
       

    </form>

    </div>
)
}

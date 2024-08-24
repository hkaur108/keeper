import React, { createContext, useState } from 'react';
import Heading from './Heading';
import Form from './Form';
import Note from './Note';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


export const ClickedContext= createContext()

export default function UI() {

    const [clicked,setclicked] =useState(false);
    const [getdata,setgetdata] =useState({title:"", note:""})
    const [recdata,setrecdata] = useState([])
  return (
    <div>
      <Heading/>
      <ClickedContext.Provider value={[clicked,setclicked,getdata,setgetdata,recdata,setrecdata]}>
        <Form/>
      </ClickedContext.Provider>
      <div className="container">
        <div className="row mt-3">
          
      <ClickedContext.Provider value={[clicked,setclicked,getdata,setgetdata,recdata,setrecdata]}>
        {recdata.map((item)=>{
          return(
            <div className="col-4" key={item.id}>
                <Note value={item}/>
            </div>
          )
        })}
          
      </ClickedContext.Provider>

        </div>
      </div>

    </div>
  )
}

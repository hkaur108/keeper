import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Heading() {
  return (
    <div className='w-100 bg-warning text-light d-flex align-items-center justify-content-between' style={{height:"80px"}}>
        <h2 className='fw-bold text-capitalize p-1 px-5'>keeper</h2>
    </div>
  )
}

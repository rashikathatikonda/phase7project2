import React from 'react'
import  { useState } from 'react';
export default function Login() {
  const [selects, setSelects] = useState();
  return (
    <div  className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div  className= 'bg-white p-3 rounded w-25'>
            <h5>Booking Tickets</h5>
            <form>
            <div>		
		                <select  onChange={e=>setSelects(e.target.value)}>						  
		<option>Select the Cinema Hall</option>
		   <option>IMAX</option>
           <option>PVR Cinemas</option>
		   <option>Asian Cinemas</option>		   
		</select>
		</div>
    <div>		
		                <select  onChange={e=>setSelects(e.target.value)}>						  
		    <option>Select Day</option>
		      <option>Sunday</option>
           <option>Monday</option>
           <option>Tuesday</option>
           <option>Wednesday</option>
           <option>Thursday</option>
           <option>Friday</option>
           <option>Saturday</option>        
		</select>
		</div>
    <div>		
		                <select  onChange={e=>setSelects(e.target.value)}>						  
		<option>Select Show Timing</option>
    <option>10:25AM</option>
       <option>01:25AM</option>
		   <option>04:25AM</option>
		   <option>10:25PM</option>
       <option>01:PM</option>
		   <option>04:25PM</option>		  
		</select>
		</div>
    <div>		
		                <select  onChange={e=>setSelects(e.target.value)}>						  
		<option>Select No. of Seats</option>
    <option>1</option>
       <option>2</option>
		   <option>3</option>
		   <option>4</option>
       <option>5</option>
		   <option>6</option>		  
		</select>
		</div>
              <button type="submit" className="btn btn-success w-10 rounded-0">Confirm</button>
              <div> 
        
        </div>

           </form>
        </div>
    </div>
  )
}

import React from 'react'
import  { useState } from 'react';
export default function () {
	
	const [selects, setSelects] = useState();
  return (
	
	<div className='table-wrapper'>
	


		<table className='table'>
			<th>
				<tr>
        <th><div>
		<select  onChange={e=>setSelects(e.target.value)}>
		<option>Now Playing</option>
    <option>Major</option>
    <option>RRR</option>
           <option>Pushpa</option>		  
		   <option>Billa</option>
		</select>
		</div></th>
					<th>
						<div>		
		                <select  onChange={e=>setSelects(e.target.value)}>						  
		<option>Languages</option>
		   <option>Telugu</option>
           <option>Hindi</option>
		   <option>English</option>
		   <option>Malyalam</option>
		</select>
		</div></th>
    <th>
						<div>		
		                <select  onChange={e=>setSelects(e.target.value)}>						  
		<option>Categories</option>
		   <option>Horror</option>
           <option>Comedy</option>
		   <option>Drama</option>
		   <option>Thriller</option>
       
		</select>
		</div></th>
		<th>
			<div className="mb-3">
                  <input type="text" placeholder="Search movie" />
					  <button className='text-decoration-none btn btn-sm btn-success'>Search</button>
                </div>
			</th>
		   <th><div>
		<select  onChange={e=>setSelects(e.target.value)}>
		<option>Sort By </option>
    <option>Price: Low to High</option>
           <option>Price:High to Low </option>		   
		</select>
		</div></th>
				</tr>
			</th>			
		</table>
    
    <table className='table' >
        <thead>
          <tr>
            <th>ID</th>
            <th>Now Playing</th>
            <th>Category</th>
            <th>Hours</th>
            <th>2D/3D</th>
			<th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Major</td>
            <td>Action/Biography/Drama</td>
            <td>2H 30M</td>
            <td>3D</td>
			<button ><td>Book Tickets</td></button>
			
          </tr>
		  <tr>
            <td>2</td>
            <td>RRR</td>
            <td>Action/Drama</td>
            <td>2H 30M</td>
            <td>2D</td>
            <button ><td>Book Tickets</td></button>
          </tr>
		  <tr>
            <td>3</td>
            <td>Pusha</td>
            <td>Action/Adventure/Crime</td>
            <td>2H 30M</td>
            <td>3D</td>
            <button ><td>Book Tickets</td></button>
          </tr>
		  <tr>
            <td>4</td>
            <td>Billa</td>
            <td>Action/Thriller/Crime</td>
            <td>2H 30M</td>
            <td>3D</td>
            <button ><td>Book Tickets</td></button>
			
          </tr>
		 
          
        </tbody>
      </table>

    </div>
  )
}

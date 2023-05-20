import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div  className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div  className= 'bg-white p-3 rounded w-25'>
           <h5>Confirmation Details</h5>
          
           <strong>  <h7>Movie Name:</h7></strong><h7>RRR</h7><br></br>
           <strong>  <h7>Show Time:</h7></strong><h7>01:25AM</h7><br></br>
           <strong>  <h7>Cinema Hall:</h7></strong><h7>IMAX</h7><br></br>
           <strong>  <h7>Language:</h7></strong><h7>Telugu</h7><br></br>
           <strong>  <h7>Date:</h7></strong> <h7>May 22,2023</h7><br></br>
           <strong>  <h7>No.of Seats:</h7></strong> <h7>4</h7><br></br>
           <strong>  <h7>Price:</h7></strong> <h7>Rs.1000</h7><br></br>
            
           
            <form>
               <h6></h6>
              <div><button type="submit" className="btn btn-success w-10 rounded-0">Pay Now</button></div>
            
              <div> 
        
        
        </div>

           </form>
        </div>
    </div>
  );
}


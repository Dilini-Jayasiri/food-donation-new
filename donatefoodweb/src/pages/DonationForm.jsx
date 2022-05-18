import React from 'react'
import {NavLink} from 'react-router-dom';

const DonationForm = () => {
 
    return (
        <div className="container shadow  my-5 justify-content-center d-flex align-items-center maindiv">
     
            <div className="col-md-6 p-5 row ">
                
                <form >
                     <div class="mb-3">
                         <label for="name" class="form-label">Name</label>
                         <input type="text" class="form-control" id="name" aria-describedby="name"/>
                             
                     </div>
                     <div class="mb-3">
                         <label for="exampleInputEmail1" class="form-label">Email address</label>
                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                             <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                     </div>
                     <div class="mb-3">
                         <label for="Phone" class="form-label">Phone Number</label>
                         <input type="number" class="form-control" id="phone" aria-describedby="phone"/>
                            
                     </div>
                     <div class="mb-3">
                         <label for="address" class="form-label">Address</label>
                         <input type="text" class="form-control" id="address"/>
                     </div>
                     <div class="mb-3">
                     <label for="org" class="form-label">Organization</label>
                     <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                     </select>
                    </div>
                     <div class="mb-3 form-check">
                         <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                             <label class="form-check-label" for="exampleCheck1">I Agree Terms and Condditions</label>
                     </div>
                     <button type="submit" class="btn btn-outline-primary w-100 mt-4 rounded-pill">Register</button>
                 </form>
            </div>
        </div>
   
    )
  }


export default DonationForm;
import React from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate=useNavigate();

  const [fname,setfname]=useState("");
  const [lname,setlname]=useState("");
  const [email,setemail]=useState("");
  const [contact,setcontact]=useState("");


  console.log(fname,lname,email,contact);

  const addemployee=async(e)=>{
    e.preventDefault();
    const res=await fetch("/add",{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname:fname,lastname:lname,emailid:email,contactno:contact
    })
  })
  const data=await res.json();
  console.log(data);
  if(res.status===400||!data){
    console.log("error");
  }else{
    console.log("success");
    navigate("/");
  }

  }

  return (
    <div className="container">
      <NavLink to="/" className="logo">Home</NavLink>
      <h1>Add a new employee</h1>
      <form className="mt-5">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">First Name</label>
            <input type="text"  onChange={(e)=>setfname(e.target.value)} class="form-control" />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Last Name</label>
            <input type="text"  onChange={(e)=>setlname(e.target.value)} class="form-control" />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Email address</label>
            <input type="email"  onChange={(e)=>setemail(e.target.value)} class="form-control" />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Contact Number</label>
            <input type="text" onChange={(e)=>setcontact(e.target.value)}  class="form-control" />
          </div>
        </div>
        <button type="submit" onClick={addemployee} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;

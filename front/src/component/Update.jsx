import React from 'react'
import { useState ,useEffect} from "react";
import { useParams } from 'react-router-dom';
import { NavLink,useNavigate} from "react-router-dom";


const Update = () => {


   const[fname,setfname]=useState("");
   const [lname,setlname]=useState("");
   const [contact,setcontact]=useState("");
   const[email,setemail]=useState("");
  
 const navigate=useNavigate();
  

      //to get id from url
  const {id}=useParams("");

  const getemployee=async()=>{
    const res=await fetch(`/view/${id}`,{
      method:"GET",
      headers: { "Content-Type": "application/json" },
  })
  const data=await res.json();
  console.log(data);
  if(res.status===400||!data){
    console.log("error");
  }else{
   const singleemp=data.employee
        setfname(singleemp.firstname);
        setlname(singleemp.lastname);
        setcontact(singleemp.contactno);
        setemail(singleemp.emailid);
  }
  }

  useEffect(()=>{
    getemployee();
  },[]);

  const updateemployee=async(e)=>{
    e.preventDefault();
    
    const res2=await fetch(`/update/${id}`,{
      method:"PATCH", 
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({
        firstname:fname,lastname:lname,emailid:email,contactno:contact
      })
    })
    const data2=await res2.json();
    console.log(data2);
    if(res2.status===400||!data2){
      console.log("error");
    }else{
      console.log("success");
     navigate("/");
    }
  }

  
    return (
      <div className="container">
        <NavLink to="/" className="logo">Home</NavLink>
        <h1>Update the employee</h1>
        <form className="mt-5">
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">First Name</label>
              <input type="text"  value={fname} onChange={(e)=>setfname(e.target.value)} class="form-control" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Last Name</label>
              <input type="text"  value={lname} onChange={(e)=>setlname(e.target.value)} class="form-control" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Email address</label>
              <input type="email" value={email}  onChange={(e)=>setemail(e.target.value)} class="form-control" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Contact Number</label>
              <input type="text" value={contact} onChange={(e)=>setcontact(e.target.value)}  class="form-control" />
            </div>
          </div>
          <button type="submit" onClick={updateemployee} className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    );
  };

export default Update
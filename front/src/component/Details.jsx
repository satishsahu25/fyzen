import React, { useState,useEffect} from "react";
import avatar from "../assets/avatar.png";
import { useParams,NavLink,useNavigate } from "react-router-dom";

const Details = () => {

  //to get id from url
  const {id}=useParams();
  const [employee,setemployee]=useState("");
  const navigate=useNavigate();

  const getemployee=async()=>{
    const res=await fetch(`/view/${id}`,{
      method:"GET",
      headers: { "Content-Type": "application/json" },
  })
  const data=await res.json();
  console.log(data);
  if(res.status==400||!data){
    console.log("error");
  }else{
    setemployee(data.employee)
  }
  }


  //delete the employee
  const deleteemp=async(id)=>{
    const res2=await fetch(`/delete/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })

    const deletedemp=await res2.json();
    console.log(deletedemp);
    if(res2.status==400||!deletedemp){
      console.log("error");
    }else{
      console.log("success");
      navigate("/");
    }
  }

  useEffect(()=>{
    getemployee();
  },[]);


  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome! {employee.firstname}</h1>
      <NavLink to="/" className="logo">Home</NavLink>
      <div className="cards">
        <img src={avatar} alt="" className="avatarimg"/>
        <div className="empid">ID: <span>{employee.empid}</span></div>
        <div className="fname">FirstName: <span>{employee.firstname}</span></div>
        <div className="lname">LastName: <span>{employee.lastname}</span></div>
        <div className="email">Email: <span>{employee.emailid}</span></div>
        <div className="contactnum">Contact Number : <span>{employee.contactno}</span></div>
        <div className="actions">
         <NavLink to={`/update/${employee._id}`}>
         <button className="updatebtn btn btn-primary mx-1">
            <i class="fa-solid fa-pen mx-1"></i>Update
          </button>
         </NavLink>
          <button
           onClick={()=>deleteemp(employee._id)}
            className="deletebtn btn-danger btn mx-1">
            <i class="fa-solid fa-trash mx-1"></i>Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;

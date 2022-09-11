import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [allemployees, setallemployees] = useState([]);

  const getallemployees = async() => {
    const res = await fetch("/allemployees", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log("ggfgf")
    console.log(data.allemployee);

    if (res.status == 400 || !data) {
      console.log("error");
    } else {
      setallemployees(data.allemployee);
    }
  };


  useEffect(() => {
    getallemployees();
  }, []);


  // /delete the employee
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
      getallemployees();
    }
  }



  return (
    <div className="mt-5">
      <div className="container">
        <div className="addbtn" mt-2>
          <NavLink to="/register">
          <button className="btn btn-primary">Add Employee</button>
          </NavLink>

          <table class="table mt-2">
            <thead>
              <tr className="table-dark">
                <th scope="col" className="text-center">
                  Employee ID
                </th>
                <th scope="col" className="text-center">
                  FirstName
                </th>
                <th scope="col" className="text-center">
                  LastName
                </th>
                <th scope="col" className="text-center">
                  EmailId
                </th>
                <th scope="col" className="text-center">
                  Contact Number
                </th>
                <th scope="col" className="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {allemployees && allemployees.map((element, id) => {
                return (
                  <tr key={id}>
                    <th scope="row" className="text-center">
                      {element.empid}
                    </th>
                    <td className="text-center">{element.firstname}</td>
                    <td className="text-center">{element.lastname}</td>
                    <td className="text-center">{element.emailid}</td>
                    <td className="text-center">{element.contactno}</td>
                    <td className="d-flex justify-content-center">
                      <NavLink to={`/update/${element._id}`}>
                        {" "}
                        <button className="updatebtn btn btn-primary mx-1">
                          <i class="fa-solid fa-pen mx-1"></i>Update
                        </button>
                      </NavLink>
                      <button 
                      onClick={()=>deleteemp(element._id)}
                       className="deletebtn btn-danger btn mx-1">
                        <i class="fa-solid fa-trash mx-1"></i>Delete
                      </button>
                      <NavLink to={`/view/${element._id}`}>
                        <button className="viewbtn btn btn-success mx-1">
                          <i class="fa-solid fa-eye mx-1"></i>View
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

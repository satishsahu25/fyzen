const  express=require("express");
const { addnewemployee, deleteemployeebyid, updateemployeebyid, allemployees, showprofile } = require("../controllers/employeecontrol");
const router=express.Router();

//add
router.post("/add",addnewemployee);
//delete
router.delete("/delete/:empid",deleteemployeebyid);
//update
router.patch("/update/:empid",updateemployeebyid);
//list all employee
router.get("/allemployees",allemployees);
//view employee profile by id
router.get("/view/:empid",showprofile);

module.exports=router

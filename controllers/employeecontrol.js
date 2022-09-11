const employeemodel=require("../models/employeemodel");

//add new employee
const addnewemployee=async(req,res)=>{
    const {firstname,lastname,emailid,contactno}=req.body;
    
  if(emailid){
    const employee=await employeemodel.findOne({emailid:emailid})
    
    if(employee){
        res.status(400).json({msg:"employee already exists"});
    }else{
        
            const newemployee=new employeemodel({
                firstname:firstname,
                lastname:lastname,
                emailid:emailid,
                empid:Math. floor(Math. random()*90000) + 10000,
                contactno:contactno,
            });
            const savedemployee=await newemployee.save();
            res.status(200).json({msg:"employee added",savedemployee
        });
    }
  }else{
    res.status(400).json({
            msg:"All fields required"
        })
  }
    }
//delete employee by id
const deleteemployeebyid=async(req,res)=>{
    try{
        const empid=req.params.empid;
        const delteduser=await employeemodel.findByIdAndDelete({_id:empid});
        if(delteduser){
            res.status(200).json({msg:"employee deleted"});
        }else{
            res.status(400).json({
                msg:"NOT DELETED"
            })
        }
    }catch(err){
        res.status(400).json({
            msg:"Something went wrong"
        });
    }
}

//update employee by id
const updateemployeebyid=async(req,res)=>{
  try{
    const empid=req.params.empid;
    if(empid){
        const updatedemp=await employeemodel.findByIdAndUpdate(empid,req.body,{new:true});
        if(updatedemp){
            res.status(200).json({msg:"employee updated",updatedemp});
        }else{
            res.status(400).json({msg:"employee not updated"});
        }
    }
  }catch(err){
    res.status(400).json({err});
  }
}
//show employee profile by id

const showprofile=async(req,res)=>{
    try{
        const empid=req.params.empid;
        const employee=await employeemodel.findById({_id:empid});

        if(employee){
            res.status(200).json({employee});
        }else{
            res.status(400).json({
                msg:"employee not found"
            })
        }
    }catch(err){
        res.status(400).json({
            msg:"Something went wrong"
        })
    }

}
//show all employees
const allemployees=async(req,res)=>{
    try{
        const allemployee=await employeemodel.find();

        if(allemployee){
            res.status(200).json({allemployee});
        }else{
            res.status(400).json({
                msg:"No employee exists"
            })
        }
    }catch(err){
        res.status(400).json({
            msg:"Something went wrong"
        })
    }

}


module.exports={addnewemployee,allemployees,showprofile,updateemployeebyid,deleteemployeebyid}

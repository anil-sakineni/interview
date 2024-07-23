const Employee=require('../models/Employee')

const createEmployee=async(req,res)=>{
    try{
        const { name,email,phone,city } = req.body

        const employee=new Employee({
            name,
            email,
            phone,
            city
        })
        await employee.save()
        res.status(201).json(employee)
    }
    catch(error){
        console.error(`there is an error${error}`);
        res.status(500).json({message:'server error'})

    }
}

const getEmployees=async(req,res)=>{
    try{
        const employees=await Employee.find()
        res.status(201).json(employees)

    }
    catch(error){
        console.error(`there is an error${error}`);
        res.status(500).json({message:'server error'})

    }
}
const singleEmployee= async(req,res)=>{
    try{
        const employee=await Employee.findById(req.params.id)
        if(!employee){
            res.status(404).json({message:"employee not found"})
        }
        res.status(201).json(employee)
    }
    catch(error){
        console.error(`there is an error${error}`);
        res.status(500).json({message:'server error'})

    }
}

const updateEmployee=async (req,res)=>{
    try{
        const {name,email,phone,city}= req.body 
        const myEmployees=await Employee.findByIdAndUpdate(
            req.params.id,
            {name,email,phone,city}
        )
        if(!myEmployees){
            res.status(404).json({message:"employeee not find"})
        }
        res.status(201).json(myEmployees)
    }
    catch(error){
        console.error(`there is an error${error}`);
        res.status(500).json({message:'server error'})
    }
}

const deleteEmployee= async(req,res)=>{
    try{
        const employee= await Employee.findByIdAndDelete(req.params.id)
        if(!employee){
            req.status(404).json({message:"employee not found"})
        }
        res.status(201).json(employee)
    }
    catch(error){
        console.error(`there is an error${error}`);
        res.status(500).json({message:'server error'})

    }
}

module.exports={
    createEmployee,
    getEmployees,
    singleEmployee,
    updateEmployee,
    deleteEmployee
}
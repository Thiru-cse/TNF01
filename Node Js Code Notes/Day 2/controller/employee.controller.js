const employees = [
    { id: 1, name: 'john', designation:'FSD'},
    { id: 2, name: 'doe', designation:'Python Dev'},
    { id: 3, name: 'arun', designation:'Frontend Dev'},
    { id: 4, name: 'kumar', designation:'Backend Dev'}
]

//get call
export const getEmployeeDetail = (req,res)=>{
    res.status(200).json({data:employees})
}

//get by ID
export const getEmployeeDetailById=(req,res)=>{
    const empId = req.params.id;
    console.log(("emp ID:", empId));

    const empDetails = employees.find(emp=>emp.id == empId)
    if(!empDetails){
        return res.status(404).json({message: "Detail not found in the particular Employee ID"})
    }
    res.status(200).json({message:"Emp Details Found!", data:empDetails})    
}

// Create Employee - POST Call
export const createEmpDetail = (req,res)=>{
    const {name, designation} = req.body
    const newEmployee = {
        id: employees.length+1,
        name:name,
        designation:designation
    }
    employees.push(newEmployee);

    res.status(200).json({message:"Employee Added Successfully!", data:newEmployee})
}

// Edit Employee - PUT Call
export const editEmployeeDetail = (req,res)=>{
   const empID = req.params.id;
   const {name, designation} = req.body; 
   const index = employees.findIndex(emp=>emp.id==empID) // 5 - 0 1 2 3 -1
   if(index === -1){
    return res.status(404).json({message:"Employee Detail Not Found!"})
   }
   employees[index].name=name;
   employees[index].designation=designation;

   res.status(200).json({message:"Updated Successfully!", data: employees[index]})
}

// Delete Employee - Delete 
export const deleteEmpDetailById = (req,res)=>{
    const empId = req.params.id;
    const index = employees.findIndex(emp=>emp.id==empId)
    if(index === -1){
        return res.status(404).json({message:"Employee Not Found!"})
    }
    employees.splice(index, 1)
    res.status(200).json({message:"Employee Deleted Successfully!"})
}
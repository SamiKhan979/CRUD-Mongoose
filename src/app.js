require('../database/conn')
const Employee = require('../model/employee')
const express = require('express')
const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post('/login',async(req,res)=>{
    try{
        const user = await Employee.findOne({name : req.body.name})
        if(user.password == req.body.password){
            res.status(200).send('Successfully Login')
        }else{
            res.send(`Did not match password`)
        }
    }
    catch(err){
        res.status(400).send(err)
    }
})
app.post("/employee",async(req,res)=>{
    const employee = new Employee(req.body)
    try{
        await employee.save();
        res.status(200).send(employee)
    }
    catch(err){
        res.status(400).send(err)
    }
})
app.patch('/employee/:id',async(req,res)=>{
    try{
        await Employee.findByIdAndUpdate(req.params.id,req.body)
        await Employee.save()
        res.status(200).send(employee)
    }
    catch(err){
        res.status(400).send(err)
    }
})
app.listen(3000,()=>{
    console.log(`Server has started...`)
})
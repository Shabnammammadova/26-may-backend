const express = require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const crypto=require('crypto')
const app = express()


app.use(cors())
app.use(bodyParser.json())


const PORT = 8080



const Program=[
    {
        id:1,
        title:"Web development",
        name:"Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."

    }
]

app.get('/api', (req, res) => {
  res.send('Hello World!')
})



//Program Crud
//Get All Program
app.get('/api/program',(req,res)=>{
    const{name}=req.query
    if(!name){
        res.status(200).send(Program)
    }
     else{
        res.status(200).send(Program.filter((x)=>x.name.toLowerCase().trim().includes(name.toLowerCase().trim())))
     }
})

//Get Program by id
app.get('/api/program/:id',(req,res)=>{
    const {id}=req.params
    res.status(200).send(Program.find((x)=>x.id==id))
})

//Delete Program

app.delete('/api/program', (req,res)=>{
    const{id}=req.params

const deleteProgram=Program.find((x)=>x.id==id)
const idx=Program.indexOf(deleteProgram)
Program.splice(idx,1)

    res.status(203).send({
        message:`${deleteProgram.name} deleted succesfully`
    })
})

//Post program 

app.post('/api/program',(req,res)=>{
    const {name,title}=req.body
    
    const newProgam =
        {
            id:crypto.randomUUID(),
            title:title,
            name:name,
           
        }
        Program.push(newProgam)
        res.status(201).send({
            message:`${newProgam.name} posted succesfully`
        })
    
})

//Edit Program

app.put('/api/program',(req,res)=>{
   const id=req.params.id
   const updatingProgram=Program.find((x)=>x.id==id)
   const{name,title}=req.body
   if(name){
    updatingProgram.name=name
   }
   if(title){
    updatingProgram.title=title
   }
   res.status(200).send(`${updatingProgram.name} updated successfully `)
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

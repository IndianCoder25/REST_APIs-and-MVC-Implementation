import express from 'express'
import {
    addNewStudent,
    getAllStudents,
    getStudentByID,
    updateStudentByID,
    deleteStudentByID
} from "./controllers/studentController"
import mongoose from "mongoose"
import bodyParser from "body-parser"

const app = express()
const port = 3000

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/CRMdb",{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(express.static("views"))

app.route("/student")
.get((req,res,next)=>{
    console.log(`Request from : ${req.originalUrl}`)
    console.log(`Request type : ${req.method}`)
    next();
},getAllStudents)
.post(addNewStudent)

app.route("/student/:studentID")
.get(getStudentByID)
.put(updateStudentByID)
.delete(deleteStudentByID)

app.listen(port, ()=> {
    console.log(`Application is listening on port: ${port}`)
})
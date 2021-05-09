import mongoose, { mongo } from "mongoose"
import {studentSchema} from '../models/Student'

const Student = mongoose.model("Student",studentSchema)

export const addNewStudent = (req,res) => {
    let newStudent = new Student(req.body)
    newStudent.save((err,answer) => {
        if(err){res.send(err)}
        else{
            res.send(answer)
        }
    })
}

export const getAllStudents = (req,res) => {
    Student.find({},(err,answer) => {
        if(err){res.send(err)}
        else{
            res.send(answer)
        }
    })
}

export const getStudentByID = (req,res) => {
    Student.find({_id:req.params.studentID},(err,answer) => {
        if(err){res.send(err)}
        else{
            res.send(answer)
        }
    })
}

export const updateStudentByID = (req,res) => {
    Student.findOneAndUpdate({_id:req.params.studentID},req.body,{new:true, useFindAndModify:false},(err,contact) => {
        if(err){
            res.send(err)
        }else{
            res.send(contact)
        }
    })
}

export const deleteStudentByID = (req,res) => {
    Student.remove({_id:req.params.studentID},(err,contact) => {
        if(err){
            res.send(err)
        }else{
            res.json({message:"Successfully deleted student from records"})
        }
    })
}
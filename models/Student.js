import mongoose from "mongoose"

const Schema = mongoose.Schema

export const studentSchema = new Schema({
    firstName:{
        type: String,
        required: "Enter first name"
    },
    lastName:{
        type: String,
        required: "Enter last name"
    },
    email:{
        type: String
    },
    phone:{
        type: Number
    },
    created_date:{
        type: Date,
        default: Date.now()
    }
})
import mongoose, { Schema } from "mongoose";
const admissionsSchema = new mongoose.Schema({
    name:{type:String, required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    course:{type:String,required:true},
});
export const Admission = mongoose.model("Admission",admissionsSchema);

import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type: String,
    required:true,
    default:"admin"
  },
  avatar:{
    type:String,
    required:true,
  },
  isFaceRegistered: {
     type: Boolean,
      default: false
     },
  faceEmbedding: {
     type: Array,
      default: null
     },
     refreshToken:{
      type:String,
     },
     isEmailVerified:{
      type:Boolean,
      default:true
     },
},{timestamps:true});

adminSchema.pre("save", async function(next){
  if(!this.isModified("password")) return next();
      this.password = await bcrypt.hash(this.password,10)
      next()
})

adminSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password,this.password)
}

adminSchema.methods.generateAccessToken=function(){
  return jwt.sign(
  {
     _id:this._id,
     email:this.email,
     fullName: this.fullName,
     role:this.role,
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
      expiresIn : process.env.ACCESS_TOKEN_EXPIRY
  }
)
}
adminSchema.methods.generateRefreshToken=function(){
  return jwt.sign(
      {
         _id:this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
          expiresIn : process.env.REFRESH_TOKEN_EXPIRY
      }
  )
}




export const Admin = mongoose.model("Admin", adminSchema);

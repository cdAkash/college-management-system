import { Admission } from "../models/admission.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const admission = asyncHandler(async(req,res)=>{
    const {name,phone,email,course}= req.body;
    if (!name || !phone || !email || !course) {
        throw new ApiError(400, "All fields are required");
      }
    
      const newAdmission = new Admission({
        name,
        phone,
        email,
        course,
      });
    
      await newAdmission.save();
    
      // Send response
      return res.status(201).json(new ApiResponse(201, newAdmission, "Admission created successfully"));
})

export { admission };
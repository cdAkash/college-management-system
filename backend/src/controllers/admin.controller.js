//utils
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
//modles
import {Admin} from "../models/admin.models.js"
import { Department } from "../models/dept.models.js";
import {Faculty} from "../models/faculty.models.js"
import {Student} from "../models/student.models.js"
import {Key} from "../models/regkey.models.js"
import {Notice} from "../models/notice.models.js"
//face-recognition
import{generateFaceEncoding} from "../services/faceRecognition.service.js"
//misc.
import fs from "fs"
import axios from "axios"
import FormData from 'form-data';
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const roleModelMap = {
    admin: Admin,
    student: Student,
    faculty: Faculty,
};

const createAdmin = asyncHandler(async (req, res) => {
    // TODO: Implement createAdmin

    /*
    get admin details and check if any of the detail is missing or invalid
    check if same admin is registerd or not using email or phoneNumber
    check images like avatar 
    upload it in cloudinary and store the url to database
    check the role
    create user object
    remove password and refresh token filed from response
    check that the admin is created or not
    return response


    */
    const { fullName,email,phoneNumber,password,role }=req.body;
    if(
        [fullName,email,phoneNumber,password,role].some((field)=> field?.trim()==="")
    ){
        throw new ApiError(400,"All fields are required");
    }

    function isValidEmail(email){
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    if(!isValidEmail(email)){
        throw new ApiError(400,"Not a vaild Email!")
    }

    function isValidPhone(phoneNumber) {
        return phoneNumber.length === 10;
    }
    

    if(!isValidPhone(phoneNumber)){
        throw new ApiError(401,"Phone Number must be of 10 digits.")
    }
    if (role !== "admin") {
        throw new ApiError(400, "You are adding Admin. Mention it");
    }
    

    const existedUser = await Admin.findOne({
        $or:[{phoneNumber},{email}]
    })
    if(existedUser){
        throw new ApiError(409,"Username or Username is already Existed")
    }
    
    
    const avatarLocalPath = req.files?.avatar?.[0]?.path;
    const cameraLocalPath = req.files?.cameraImage?.[0]?.path

    let avatarUrl;
    if (avatarLocalPath) {
        const avatar = await uploadOnCloudinary(avatarLocalPath);
        if (!avatar) {
            throw new ApiError(400, "Avatar is not available");
        }
        avatarUrl = avatar.url;
    }
    let faceEncoding;
    if (cameraLocalPath) {
        const pythonApiUrl = "http://127.0.0.1:5000/api/generate-encoding"; 
        const imagePath = cameraLocalPath;
        try {
            const formData = new FormData();
            formData.append("image", fs.createReadStream(imagePath));
    
            const response = await axios.post(pythonApiUrl, formData, {
                headers: {
                    ...formData.getHeaders(),
                },
            });
    
            faceEncoding = response.data.faceEncoding;
        } catch (error) {
            throw new ApiError(500, `Face encoding failed: ${error.response?.data?.error || error.message}`);
        }
    
        if (!faceEncoding) {
            throw new ApiError(500, "Face encoding is missing from the API response");
        }
    }
    
    const admin = await Admin.create({
        fullName,
        email,
        phoneNumber,
        role,
        ...(avatarUrl && { avatar: avatarUrl }),
        password,
        faceEmbedding:faceEncoding,
        isFaceRegistered:true,
        isEmailVerified:true,
    })

    const isCreatedAdmin = await Admin.findById(admin._id).select("-password -refreshToken")
    if(!isCreatedAdmin){
        throw new ApiError(500,"DevError:Something went wrong")
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200,isCreatedAdmin,"Admin created")
        )

});

const createDepartment = asyncHandler(async (req, res) => {
    // TODO: Implement createDepartment
    let { name, courses, deptId } = req.body

    if(!name && !courses && deptId){
        throw new ApiError(400,"Name and courses are mandatory.")

    }
    name = name.trim().toLowerCase()
    deptId = deptId.trim().toLowerCase()
    
    const createdDept = await Department.create({
        name,
        deptId,
        courses,
    })

    if(!createdDept){
        throw new ApiError(500,"Something went wrong while creating department.")
    }
    await Key.create({
        departmentId: createdDept._id,
        facultyKeys: [],
        studentKeys: [],
      });
    return res
            .status(200)
            .json(
                new ApiResponse(200,createdDept,"Department creation succesfull")
            )
});

const viewAllDepartments = asyncHandler(async (req, res) => {
    // TODO: Implement viewAllDepartments
    const result = await Department.find({})
    if(!result){
        throw new ApiError(500,"Something went wrong While fecthing dept details")
    }
    return res
            .status(200)
            .json(
                new ApiResponse(200,result,"Fetched successfully")
            )
});

const addCourse = asyncHandler(async (req, res) => {
    const { courses, deptId } = req.body;

    if (!courses || !deptId) {
        throw new ApiError(400, "Both department ID and courses are required.");
    }

    const dept = await Department.findOne({ deptId });
    if (!dept) {
        throw new ApiError(404, "Given department is not valid.");
    }

    // Ensure courses is an array
    if (!Array.isArray(courses)) {
        throw new ApiError(400, "Courses should be an array.");
    }

    // Add each course to the department's courses array
    courses.forEach(course => {
        if (!dept.courses.includes(course)) {
            dept.courses.push(course);
        }
    });

    await dept.save({ validateBeforeSave: false });

    return res.status(200).json(
        new ApiResponse(200, dept, "Courses added successfully.")
    );
});

const deleteDepartment = asyncHandler(async (req, res) => {
    // TODO: Implement deleteDepartment
    const {deptId} = req.body
    if(!deptId){
        throw new ApiError(400,"Dept name is required")
    }
    let result;
    try {
         result = await Department.deleteOne({deptId})     
    } catch (error) {
        throw new ApiError(400,error,"Something went Wrong")
    }
    if(result.deletedCount===0){
        return res.status(503).json(new ApiResponse(503,{},"DeptId not found"))
    }
    return res
            .status(200)
            .json(
                new ApiResponse(200,{},"Department Deleted Successfully.")
            )
});

const assignHOD = asyncHandler(async (req, res) => {
    // TODO: Implement assignHOD
    const {HODemail,deptId} = req.body
    if(!HODemail && !deptId){
        throw new ApiError(400,"Faculty name and deptId is required")
    }
    const hod = await Faculty.findOneAndUpdate(
        {email:HODemail},
        {
            $set:
                {
                    isHOD:true,
                }
        }
    )
    if(!hod){
        throw new ApiError(400,"Faculty Fetching failed")
    }
    const result = await Department.findOneAndUpdate(
        {deptId},
        {
            $set:
                {
                    HOD:hod?._id,
                }
        },
        {new:true}
    )
    if(!result){
        throw new ApiError(400,"HOD assinging Failed")
    }

    return res
            .status(200)
            .json(
                new ApiResponse(200,{result},"HOD assigned completed.")
            )
});

const revokeHOD = asyncHandler(async(req,res)=>{
    const {HODemail,deptId} = req.body
    if(!HODemail && !deptId){
        throw new ApiError(400,"Faculty name and deptId is required")
    }
    const hod = await Faculty.findOneAndUpdate(
        {email:HODemail},
        {
            $set:
                {
                    isHOD:false,
                }
        }
    )
    if(!hod){
        throw new ApiError(400,"Faculty Fetching failed")
    }
    const result = await Department.findOneAndUpdate(
        {deptId},
        {
            $set:
                {
                    HOD:null,
                }
        }
    )
    if(!result){
        throw new ApiError(400,"HOD Revoke Failed")
    }

    return res
            .status(200)
            .json(
                new ApiResponse(200,{result},"HOD Revoke completed.")
            )
});

// can be called by HOD as well
const registerFaculty = asyncHandler(async (req, res) => {
    // TODO: Implement registerFaculty
    const {fullName,email,phoneNumber,password,deptId} = req.body
    if(
        [fullName,email,phoneNumber,password,deptId].some((field)=> field?.trim()==="")
    ){
        throw new ApiError(400,"All fields are required")
    }

    function isValidPhone(phoneNumber) {
        return phoneNumber.length === 10;
    }
    

    if(!isValidPhone(phoneNumber)){
        throw new ApiError(401,"Phone Number must be of 10 digits.")
    }
    function isValidEmail(email){
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    if(!isValidEmail(email)){
        throw new ApiError(400,"Not a vaild Email!")
    }
    const dept = await Department.findOne({deptId})

    let avatarUrl;
    if(req.files?.avatar){
        const avatarLocalPath = req.files.avatar[0].path
        const uploadedAvatar = await uploadOnCloudinary(avatarLocalPath)
        avatarUrl = uploadedAvatar?.url
    }

    let faceEmbedding;
    let isFaceRegistered = false;
    if(req.files?.cameraImage){
        const cameraImageLocalPath = req.files.cameraImage[0].path
        faceEmbedding = await generateFaceEncoding(cameraImageLocalPath)
        isFaceRegistered = true
    }

    const faculty = await Faculty.create({
        fullName,
        email,
        phoneNumber,
        password,
        department: dept?._id,
        ...(avatarUrl && { avatar: avatarUrl }),
        ...(faceEmbedding && { 
            faceEmbedding,
            isFaceRegistered,
            isEmailVerified:true, 
        })
    })

    if(!faculty){
        throw new ApiError(500,"Faculty registration failed")
    }

    return res
            .status(200)
            .json(
                new ApiResponse(200,faculty,"Faculty registraion completed.")
            )

});

const deleteFaculty = asyncHandler(async(req,res)=>{
    const {email} = req.body
    if(!email){
        throw new ApiError(400,"Email is required")
    }
    try {
        await Faculty.deleteOne({email})
    } catch (error) {
        throw new ApiError(500,error,"Something went wrong")
    }
    return res
            .status(200)
            .json(
                new ApiResponse(200,{},"Deletion Successfully.")
            )
});

const searchFaculty = asyncHandler(async(req,res)=>{
    const {email} = req.query
    if(!email){
        throw new ApiError(400,"Email is required")
    }

    const faculty = await Faculty.findOne({email})
    .select("-password -faceEmbedding -refreshToken")
    .populate("department","name")
    console.log(faculty)
    if(!faculty){
        throw new ApiError(500,"User is not Available")
    }
    return res
            .status(200)
            .json(
                new ApiResponse(200,faculty,"Search Completed with result")
            )
});
//ends here
const viewAllFacultyDeptWise = asyncHandler(async (req, res) => {
    try {
        let facultiesByDept;

        if (req.user.role === "admin") {
            // Admin: Fetch all faculties of all departments
            facultiesByDept = await Department.aggregate([
                {
                    $lookup: {
                        from: "faculties",
                        localField: "_id",
                        foreignField: "department",
                        as: "faculties"
                    }
                },
                {
                    $unwind: {
                        path: "$faculties",
                        preserveNullAndEmptyArrays: true
                    }
                },
                {
                    $group: {
                        _id: "$_id",
                        departmentName: { $first: "$name" },
                        deptId: { $first: "$deptId" },
                        faculties: { $push: "$faculties.fullName" },
                        email: { $push: "$faculties.email" },
                        isHod: { $push: "$faculties.isHOD" }
                    }
                },
                {
                    $sort: { departmentName: 1 }
                }
            ]);
        } else if (req.user.role === "faculty") {
            // Faculty: Fetch faculties of only their department
            facultiesByDept = await Department.aggregate([
                {
                    $match: { _id: req.user.department }
                },
                {
                    $lookup: {
                        from: "faculties",
                        localField: "_id",
                        foreignField: "department",
                        as: "faculties"
                    }
                },
                {
                    $unwind: {
                        path: "$faculties",
                        preserveNullAndEmptyArrays: true
                    }
                },
                {
                    $group: {
                        _id: "$_id",
                        departmentName: { $first: "$name" },
                        deptId: { $first: "$deptId" },
                        faculties: { $push: "$faculties.fullName" },
                        email: { $push: "$faculties.email" },
                        isHod: { $push: "$faculties.isHOD" }
                    }
                },
                {
                    $sort: { departmentName: 1 }
                }
            ]);
        } else {
            throw new ApiError(403, "Unauthorized access");
        }

        if (!facultiesByDept) {
            throw new ApiError(500, "Something went wrong during fetching data");
        }

        return res.status(200).json(new ApiResponse(200, facultiesByDept, "Data fetched successfully"));
    } catch (error) {
        throw new ApiError(400, error, "Something went wrong during fetching data");
    }
});
//can be called by hod and faculty as well
const registerStudent = asyncHandler(async (req, res) => {
    // TODO: Implement registerStudent

    const {fullName,email,phoneNumber,password,course,year,session,deptId} = req.body
    if(
        [fullName,email,phoneNumber,password,course,year,session,deptId].some((field)=> field?.trim()==="")
    ){
        throw new ApiError(400,"All fields are required")
    }
    function isValidPhone(phoneNumber) {
        return phoneNumber.length === 10;
    }
    

    if(!isValidPhone(phoneNumber)){
        throw new ApiError(401,"Phone Number must be of 10 digits.")
    }
    function isValidEmail(email){
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    if(!isValidEmail(email)){
        throw new ApiError(400,"Not a vaild Email!")
    }
    const dept = await Department.findOne({deptId})

    let avatarUrl;
    if(req.files?.avatar){
        const avatarLocalPath = req.files.avatar[0].path
        const uploadedAvatar = await uploadOnCloudinary(avatarLocalPath)
        avatarUrl = uploadedAvatar?.url
    }

    // Handle optional face registration
    let faceEmbedding;
    let isFaceRegistered = false;
    if(req.files?.cameraImage){
        const cameraImageLocalPath = req.files.cameraImage[0].path
        faceEmbedding = await generateFaceEncoding(cameraImageLocalPath)
        isFaceRegistered = true
    }

    const student = await Student.create({
        fullName,
        email,
        phoneNumber,
        password,
        course,
        year,
        session,
        department:dept?._id,
        ...(avatarUrl && { avatar: avatarUrl }),
        ...(faceEmbedding && { 
            faceEmbedding,
            isFaceRegistered 
        }),
        isEmailVerified:true,
    })

    if(!student){
        throw new ApiError(500,"Student registration failed")
    }

    return res
            .status(200)
            .json(
                new ApiResponse(200,student,"Student registraion completed.")
            )
});

const deleteStudent = asyncHandler(async(req,res)=>{
    const {email} = req.body
    if(!email){
        throw new ApiError(400,"Email is required")
    }
    try {
        await Student.deleteOne({email})
    } catch (error) {
        throw new ApiError(500,error,"Something went wrong")
    }
    return res
            .status(200)
            .json(
                new ApiResponse(200,{},"Deletion Successfully.")
            )
});

const searchStudent = asyncHandler(async(req,res)=>{
    const {email} = req.query
    if(!email){
        throw new ApiError(400,"Email is required")
    }

    const student = await Student.findOne({email})
    .select("-password -faceEmbedding -refreshToken")
    .populate("department","name")

    if(!student){
        throw new ApiError(500,"User is not Available")
    }
    return res
            .status(200)
            .json(
                new ApiResponse(200,student,"Search Completed with result")
            )
})
//ends here
const viewAllStudentDeptWise = asyncHandler(async (req, res) => {
    try {
        const userRole = req.user.role;
        const userDeptId = req.user.department; 

        let matchCondition = {};
        if (userRole === 'faculty') {
            matchCondition = { _id: new mongoose.Types.ObjectId(userDeptId) };
        }

        const StudentByDept = await Department.aggregate([
            {
                $match: matchCondition
            },
            {
                $lookup: {
                    from: "students",
                    localField: "_id",
                    foreignField: "department",
                    as: "studentDetails"
                }
            },
            {
                $unwind: {
                    path: "$studentDetails",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $group: {
                    _id: "$_id",
                    departmentName: { $first: "$name" },
                    students: { $push: "$studentDetails.fullName" },
                    courses:{$push:"$studentDetails.course"},
                    year:{$push:"$studentDetails.year"},
                    session:{$push:"$studentDetails.session"}
                }
            },
            {
                $sort: { departmentName: 1 }
            }
        ]);

        if (!StudentByDept) {
            throw new ApiError(500, "Something went wrong during fetching data");
        }

        return res
            .status(200)
            .json(
                new ApiResponse(200, StudentByDept, "Data fetched successfully")
            );
    } catch (error) {
        throw new ApiError(400, error.message, "Something went wrong during fetching data");
    }
});

const generateRegistrationKey = asyncHandler(async (req, res) => {
    const { deptId, facultyKeys, studentKeys } = req.body;
  
    const normalizedFacultyKeys = facultyKeys ? 
      (Array.isArray(facultyKeys) ? facultyKeys : [facultyKeys]) : [];
    const normalizedStudentKeys = studentKeys ? 
      (Array.isArray(studentKeys) ? studentKeys : [studentKeys]) : [];
  
    if (normalizedFacultyKeys.length === 0 && normalizedStudentKeys.length === 0) {
      throw new ApiError(400, "At least one key is required");
    }
  
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    if (normalizedFacultyKeys.length > 0) {
      for (let i = 0; i < normalizedFacultyKeys.length; i++) {
        if (!isValidEmail(normalizedFacultyKeys[i].key)) {
          throw new ApiError(401, `Invalid faculty email at index ${i}`);
        }
      }
    }
  

    if (normalizedStudentKeys.length > 0) {
      for (let i = 0; i < normalizedStudentKeys.length; i++) {
        if (!isValidEmail(normalizedStudentKeys[i].key)) {
          throw new ApiError(401, `Invalid student email at index ${i}`);
        }
      }
    }
  
    const dept = await Department.findOne({ deptId: deptId.trim().toLowerCase() });
    if (!dept?._id) {
      throw new ApiError(400, "Invalid department ID");
    }
  
    const keys = await Key.findOneAndUpdate(
      { departmentId: dept._id },
      {
        $addToSet: {
          facultyKeys: { $each: normalizedFacultyKeys },
          studentKeys: { $each: normalizedStudentKeys },
        },
      },
      { new: true, upsert: true }
    );
  
    if (!keys) {
      throw new ApiError(400, "Key creation failed");
    }
  
    return res
      .status(200)
      .json(new ApiResponse(200, keys, "Keys generated successfully"));
  });

const viewRegistrationKey = asyncHandler(async (req, res) => {
    // TODO: Implement viewRegistrationKey
    // const {deptId} = req.body

    // const dept = await Department.findOne({deptId})
    // if(!dept){
    //     throw new ApiError(500,"DeptId is invalid")
    // }
    const result = await Key.find()
    if(!result){
        throw new ApiError(500,"Result not found")
    }
    return res
            .status(200)
            .json(
                new ApiResponse(200,result,"Fetching succesfull")
            )
});

const revokeRegistrationKey = asyncHandler(async (req, res) => {
    const { searchKey, role } = req.body;
    const normalizedRole = role.trim().toLowerCase();

    const keyDoc = await Key.findOne({
        $or: [
            { "facultyKeys.key": searchKey },
            { "studentKeys.key": searchKey }
        ]
    });

    if (!keyDoc) {
        throw new ApiError(500, "Key not found");
    }

    if (normalizedRole === "faculty") {
        const updatedDocument = await Key.findOneAndUpdate(
            { _id: keyDoc._id, "facultyKeys.key": searchKey },
            { $set: { "facultyKeys.$.isActive": false } },
            { new: true }
        );

        if (!updatedDocument) {
            throw new ApiError(404, "Key not found or department does not exist");
        }

        return res.status(200).json({
            message: "Faculty key revoked successfully",
            data: updatedDocument,
        });
    } else if (normalizedRole === "student") {
        const updatedDocument = await Key.findOneAndUpdate(
            { _id: keyDoc._id, "studentKeys.key": searchKey },
            { $set: { "studentKeys.$.isActive": false } },
            { new: true }
        );

        if (!updatedDocument) {
            throw new ApiError(404, "Key not found or department does not exist");
        }

        return res.status(200).json({
            message: "Student key revoked successfully",
            data: updatedDocument,
        });
    } else {
        throw new ApiError(500, "Invalid role");
    }
});

const grantRegistrationKey = asyncHandler(async (req, res) => {
    const { searchKey, role } = req.body;
    const normalizedRole = role.trim().toLowerCase();

    const keyDoc = await Key.findOne({
        $or: [
            { "facultyKeys.key": searchKey },
            { "studentKeys.key": searchKey }
        ]
    });

    if (!keyDoc) {
        throw new ApiError(500, "Key not found");
    }

    if (normalizedRole === "faculty") {
        const updatedDocument = await Key.findOneAndUpdate(
            { _id: keyDoc._id, "facultyKeys.key": searchKey },
            { $set: { "facultyKeys.$.isActive": true } },
            { new: true }
        );

        if (!updatedDocument) {
            throw new ApiError(404, "Key not found or department does not exist");
        }

        return res.status(200).json({
            message: "Faculty key granted successfully",
            data: updatedDocument,
        });
    } else if (normalizedRole === "student") {
        const updatedDocument = await Key.findOneAndUpdate(
            { _id: keyDoc._id, "studentKeys.key": searchKey },
            { $set: { "studentKeys.$.isActive": true } },
            { new: true }
        );

        if (!updatedDocument) {
            throw new ApiError(404, "Key not found or department does not exist");
        }

        return res.status(200).json({
            message: "Student key granted successfully",
            data: updatedDocument,
        });
    } else {
        throw new ApiError(500, "Invalid role");
    }
});

const addRegistrationKey = asyncHandler(async (req, res) => {
    const { deptId, keysToadd, role } = req.body;
    
    const keys = Array.isArray(keysToadd) ? keysToadd : [keysToadd];

    if (!keys || (Array.isArray(keys) && keys.some((key) => key.length !== 10)) || (typeof keys === "string" && keys.length !== 10)) {
        return res.status(400).json(
            new ApiResponse(400, {}, "Each key must be exactly 10 characters long.")
        );
    }

    
    const dept = await Department.findOne({ deptId });
    if (!dept) {
        throw new ApiError(404, "Department ID is invalid or not found.");
    }

 
    let keyDoc = await Key.findOne({ departmentId: dept._id });
    if (!keyDoc) {
        throw new ApiError(404, "Key document not found for this department");
    }

   
    if (role === "faculty") {
        keys.forEach((key) => {
            if (!keyDoc.facultyKeys.some((k) => k.key === key)) {
                keyDoc.facultyKeys.push({ key });
            }
        });
    } else if (role === "student") {
        keys.forEach((key) => {
            if (!keyDoc.studentKeys.some((k) => k.key === key)) {
                keyDoc.studentKeys.push({ key });
            }
        });
    } else {
        return res.status(400).json(
            new ApiResponse(400, {}, "Invalid role. Role must be 'faculty' or 'student'.")
        );
    }


    await keyDoc.save();

    return res.status(200).json(
        new ApiResponse(200, { data: keyDoc }, `${role} keys added successfully.`)
    );
});


const removeRegistrationKey = asyncHandler(async (req, res) => {
    const { deptId, keys, role } = req.body;

    if (!keys || (Array.isArray(keys) && keys.some((key) => key.length !== 10)) || (typeof keys === "string" && keys.length !== 10)) {
        return res.status(400).json(
            new ApiResponse(400, {}, "Each key must be exactly 10 characters long.")
        );
    }

    const dept = await Department.findOne({ deptId });
    if (!dept) {
        throw new ApiError(404, "Department ID is invalid or not found.");
    }

    const keyDoc = await Key.findOne({ departmentId: dept._id });
    if (!keyDoc) {
        throw new ApiError(404, "Key document not found for this department.");
    }

    let updated = false;

     if (role === "faculty") {
        keyDoc.facultyKeys = keyDoc.facultyKeys.filter((k) => !keys.includes(k.key));
    } else if (role === "student") {
        keyDoc.studentKeys = keyDoc.studentKeys.filter((k) => !keys.includes(k.key));
    } else {
        throw new ApiError(400, "Invalid role");
    }

    await keyDoc.save();
    return res.status(200).json(
        new ApiResponse(200, { data: keyDoc }, `${role} keys removed successfully.`)
    );
});

const addNoticeByAdmin = asyncHandler(async (req,res)=>{
    //TODO: Implement notice 
    const {title,content} = req.body
    if(
        [title,content].some((field)=>field?.trim()==="")
    ){
        throw new ApiError(400,"All fields are required")
    }
    const notice = await Notice.create({
        title,
        content,
        createdBy: req.user?._id,
        createdByModel:'Admin',
        department:null,
        isGlobal:true,
    })
    if(!notice){
        throw new ApiError(500,"Notice Creation Failed")
    }

    return res
            .status(200)
            .json(
                new ApiResponse(200,notice,"Notice Added")
            )
});

const removeNoticeByAdmin = asyncHandler(async (req,res)=>{
    //TODO: remove notice by admin
        const { id } = req.body; 
        
        if (!id) {
            throw new ApiError(400, "Notice ID is required.");
        }
        const notice = await Notice.findByIdAndDelete(id);
        
        if (!notice) {
            throw new ApiError(404, "Notice not found.");
        }
        return res.status(200).json(
             new ApiResponse(200,{},"Notice deleted successfully." )
            );
});

const viewAllNotice = asyncHandler(async (req,res)=>{
    //TODO: Implement notice 
    let allNotices;
    try {
         allNotices = await Notice.find({
            $or: [{ isGlobal: true },  {department: { $exists: true }}]
        }).populate('createdBy','_id fullName').populate('department', '_id name').setOptions({ strictPopulate: false });  
    } catch (error) {
        throw new ApiError(500,error,"Something went wrong.")
    }
    return res.status(200).json(
        new ApiResponse(200,allNotices,"Notice fetched succesfull")
    )
});

const updateDetails = asyncHandler(async (req, res) => {
    const { fullName, email, phoneNumber } = req.body;
    const avatarLocalPath = req.files?.avatar?.[0]?.path;

    // Decode the access token to get the user ID
    const token = req.cookies.accessToken;
    console.log(token)
    if (!token) {
        throw new ApiError(401, "Access token is required");
    }
    let decoded
    let userId;
    try {
        decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log(decoded)
        userId = decoded._id;
    } catch (error) {
        throw new ApiError(401,error, "Invalid access token");
    }

    const updateData = {};

    if (fullName) updateData.fullName = fullName;
    if (email) updateData.email = email;
    if (phoneNumber) updateData.phoneNumber = phoneNumber;

    if (avatarLocalPath) {
        const avatar = await uploadOnCloudinary(avatarLocalPath);
        if (!avatar) {
            throw new ApiError(400, "Avatar upload failed");
        }
        updateData.avatar = avatar.url;
    }
    let role = decoded.role
    console.log(role)
    const userRole = roleModelMap[role]
    const updatedUser = await userRole.findByIdAndUpdate(userId, updateData, { new: true }).select("-password -refreshToken");

    if (!updatedUser) {
        throw new ApiError(404, "User not found");
    }

    return res.status(200).json(new ApiResponse(200, updatedUser, "User details updated successfully"));
});
export {
createAdmin,
createDepartment,
viewAllDepartments,
addCourse,
deleteDepartment,
assignHOD,
revokeHOD,
registerFaculty,
deleteFaculty,
searchFaculty,
viewAllFacultyDeptWise,
registerStudent,
deleteStudent,
searchStudent,
viewAllStudentDeptWise,
generateRegistrationKey,
viewRegistrationKey,
revokeRegistrationKey,
grantRegistrationKey,
addRegistrationKey,
removeRegistrationKey,
addNoticeByAdmin,
removeNoticeByAdmin,
viewAllNotice,
updateDetails,
};

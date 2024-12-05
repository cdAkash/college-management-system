import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import adminRouter from "./routes/admin.routes.js"
import facultyRouter from "./routes/faculty.routes.js"
import studentRouter from "./routes/student.routes.js"


//routes Declaration
app.use("/api/v1/admin",adminRouter)
app.use("/api/v1/faculty",facultyRouter)
app.use("/api/v1/student",studentRouter)



export {app}
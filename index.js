// Importing External Packages

const express=require("express")
const cors= require("cors")
require("dotenv").config()


//  Importing Internal Modules

const {connection}=require("./Config/db.js")
const {UserRoute}=require("./Routes/userRoute.js")
const {QuizRoute}=require("./Routes/quizRoute.js")



// .....................................................................................................
const app=express()
app.use(cors())
app.use(express.json())
app.use(cors({origin:"*"}))

app.get("/",(req,res)=>{
    res.send("Base Api of Atir-Quiz App")
})

app.use("/user",UserRoute)
app.use("/quiz",QuizRoute)



// .....................................................................................................


//  Server Listen

app.listen(process.env.PORT,async()=>{
    try {
       await connection
       console.log("Connected To DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`Listening on port ${process.env.PORT }`)
})
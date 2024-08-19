import express from 'express'
import cors from 'cors' 
import dotenv from 'dotenv'
import connectDB from './Database/config.js'
import empRouter from './Routers/employee.router.js'


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT

connectDB()

app.use('/api', empRouter);

app.listen(PORT, ()=>{
    console.log("App is running on the PORT -", PORT);
})
import express from 'express';
import cors from 'cors'
import empRouter from './Router/employee.router.js'

const app = express();
const PORT = 4000;
app.use(cors())
app.use(express.json())

app.use('/empapi', empRouter)

// app.get('/', (req,res)=>{
//     res.status(200).send("example")
// })

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
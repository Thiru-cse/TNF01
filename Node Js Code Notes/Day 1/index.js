import express from 'express';
import fs from 'fs';
import {format} from 'date-fns'

const app = express();
const PORT = 4000;

app.get('/', (req, res)=>{
    res.status(200).json({message:"Hi my dear team!, We will become FSD"})
})

app.get('/write-read', (req,res)=>{
    let today = format(new Date(), 'dd-mm-yyyy-HH-mm-ss')
    console.log(("today",today));
    const filePath = `TimeStamp/${today}.txt`
    fs.writeFileSync(filePath, `${today}`, 'utf8')
    let data = fs.readFileSync(filePath, 'utf-8')
    res.status(200).send(data);
})

app.listen(PORT, ()=>{
    console.log(`Server is running in the ${PORT}`);
}) //running
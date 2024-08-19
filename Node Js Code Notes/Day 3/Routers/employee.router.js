import express from 'express'
import { createEmployee, getEmployeeDetail, getEmployeeDetailById, updateEmployeeById } from '../Controllers/employee.controller.js'

const router = express.Router()

router.post('/create-emp', createEmployee)
router.get('/get-empdetails', getEmployeeDetail)
router.get('/get-empdetails/:id', getEmployeeDetailById)
router.put('/edit-emp/:email', updateEmployeeById)

export default router;
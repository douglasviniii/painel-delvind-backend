import express from "express";
import EmployeeController from "../Controller/EmployeeController";

const router = express.Router();

router.post('/create', EmployeeController.CreateEmployee);
router.get('/findall', EmployeeController.FindAllEmployee);
router.post('/auth', EmployeeController.Auth);
router.patch('/update/:id', EmployeeController.UpdateEmployee);
router.delete('/delete/:id', EmployeeController.DeleteEmployee);

export default router;
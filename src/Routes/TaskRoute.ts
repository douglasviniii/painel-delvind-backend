import express from 'express';
import TaskController from '../Controller/TaskController';
import EmployeeMiddleware from '../Middlware/EmployeeMiddlware';

const router = express.Router();

router.post('/create', EmployeeMiddleware, TaskController.CreateTask);
router.get('/find', EmployeeMiddleware, TaskController.FindByIdTask);
router.get('/findadmin', TaskController.FindTaskAdmin);
router.get('/findtaskmembers',EmployeeMiddleware,TaskController.FindTaskAdmin);
router.post('/createadmin', TaskController.CreateTaskAdmin);
router.put('/status/:id', TaskController.UpdateTask);
router.delete('/delete/:id', TaskController.DeleteTask);

export default router;
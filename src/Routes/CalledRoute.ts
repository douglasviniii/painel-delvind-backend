import express from 'express';
import CalledController from '../Controller/CalledController';
import EmployeeMiddleware from '../Middlware/EmployeeMiddlware';

const router = express.Router();

router.post('/create', EmployeeMiddleware, CalledController.CreateCalled);
router.get('/find', EmployeeMiddleware, CalledController.FindById);
router.post('/createadmin', CalledController.CreateCalledAdmin);
router.get('/findadmin', CalledController.FindByIdAdmin);
router.put('/status/:id', CalledController.UpdateCalled);
router.delete('/delete/:id', CalledController.DeleteCalled);

export default router;
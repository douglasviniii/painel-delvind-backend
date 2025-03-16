import express from 'express';
import EmployeeMiddleware from '../Middlware/EmployeeMiddlware';
import ReportEmployeeController from '../Controller/ReportEmployeeController';

const router = express.Router();

router.post('/create', EmployeeMiddleware, ReportEmployeeController.CreateReportEmployee);
router.post('/send/:id', EmployeeMiddleware, ReportEmployeeController.SendReportEmployee);
router.get('/find',EmployeeMiddleware, ReportEmployeeController.ReportEmployeeFindById);
router.get('/findsends', ReportEmployeeController.SendsReportEmployeeFindById);
router.get('/findsendsemployee',EmployeeMiddleware,ReportEmployeeController.SendsReportEmployeeFindByIdEmployee);
router.patch('/update/:id', ReportEmployeeController.UpdateReportEmployee);
router.delete('/delete/:id', ReportEmployeeController.DeleteReportEmployee);
router.delete('/deletesends/:id', ReportEmployeeController.DeleteReportSendsEmployee);

export default router; 
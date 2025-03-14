import express from 'express';
import ReportAdminController from '../Controller/ReportAdminController';

const router = express.Router();

router.post('/create', ReportAdminController.CreateReportAdmin);
router.get('/find',ReportAdminController.FindReportAdmin);
router.patch('/update/:id', ReportAdminController.UpdateReportAdmin);
router.delete('/delete/:id', ReportAdminController.DeleteReportAdmin);

export default router;
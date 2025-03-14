import express from "express";
import EmployeeMiddleware from "../Middlware/EmployeeMiddlware";
import NotificationsController from "../Controller/NotificationsController";

const router = express.Router();

router.post('/create', NotificationsController.Create);
router.get('/find',EmployeeMiddleware, NotificationsController.FindById);
router.delete('/delete/:id', NotificationsController.Delete);

//verificar se precisar add logica de notificação para o admin

export default router;
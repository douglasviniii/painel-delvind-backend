import express from "express";
import PaymentController from "../Controller/PaymentController";

const router = express.Router();

router.post('/create', PaymentController.CreateController);
router.get('/find', PaymentController.FindController);
router.get('/finddatabase', PaymentController.FindDBController)
router.get('/find/:id', PaymentController.FindByIdController);
router.patch('/desactivate/:id', PaymentController.DesactivateController);

export default router;
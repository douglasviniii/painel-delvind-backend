import express from "express";
import BudgetController from "../Controller/BudgetController";

const router = express.Router();

router.post('/create', BudgetController.CreateController);
router.get('/find', BudgetController.FindController);
router.patch('/update/:id', BudgetController.UpdateController);
router.delete('/delete/:id', BudgetController.DeleteController);

export default router;
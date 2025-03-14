import express from "express";
import AdminController from "../Controller/AdminController";

const router = express.Router();

router.post('/create', AdminController.CreateAdmin);
router.post('/auth', AdminController.Auth);

export default router;
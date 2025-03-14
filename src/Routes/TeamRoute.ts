import express from 'express';
import TeamController from '../Controller/TeamController';
import EmployeeMiddleware from '../Middlware/EmployeeMiddlware';

const router = express.Router();

router.post('/create', TeamController.CreateTeam);
router.get('/find', TeamController.FindTeam);
router.get('/findteamemployee',EmployeeMiddleware,TeamController.FindByIdTeam);
router.patch('/update/:id',TeamController.UpdateTeam);
router.delete('/delete/:id', TeamController.DeleteTeam);

export default router;
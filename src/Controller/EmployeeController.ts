import { Request, Response } from 'express';
import EmplyeeService from '../Service/EmplyeeService';

const CreateEmployee = async (req: Request, res: Response) => {
    try {
        const {name, team, email, password} = req.body;
        res.status(201).json(await EmplyeeService.CreateEmployeeService({name, team, email, password}));
    } catch (error) {
        res.status(500).json({message: 'Internal server error',error});
    }
}

const FindAllEmployee = async (req: Request, res: Response) => {
    try {
        const users = await EmplyeeService.FindAll();
        res.status(201).send(users);
    } catch (error) {
        res.status(500).json({message: 'Internal server error',error});
    }
}

const Auth = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;

        const user = await EmplyeeService.Login(email);

        if (!user) {
            res.status(401).json({message: 'User not found'});
        }

        if(password != user!.password){
            res.status(401).json({message: 'Invalid password'});
        }

        const token = await EmplyeeService.Generatetoken(user!.id);
        const employee = await EmplyeeService.FindEmployee(email);
        
        res.status(200).json({token, employee});
    } catch (error) {
        res.status(500).json({message: 'Internal server error',error});
    }
}

const UpdateEmployee = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {name, team, password, status} = req.body;
        res.status(200).json(await EmplyeeService.Update(id, {name, team, password, status}));
    } catch (error) {
        res.status(500).json({message: 'Internal server error',error});
    }
}

const DeleteEmployee = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        res.status(200).json(await EmplyeeService.Delete(id));
    } catch (error) {
        res.status(500).json({message: 'Internal server error',error});
    }
}

export default {CreateEmployee,FindAllEmployee,Auth,UpdateEmployee,DeleteEmployee};
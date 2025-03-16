import {Request, Response} from 'express';
import TaskService from '../Service/TaskService';

interface CustomRequest extends Request {
    userid?: string;
    userObject?:object;
} 

const CreateTask = async (req: CustomRequest, res: Response) => {
    try {
        const {title, description, date} = req.body;

        const formattedDate = new Date(date);
        const utcDate = new Date(Date.UTC(
            formattedDate.getFullYear(),
            formattedDate.getMonth(),
            formattedDate.getDate()
        ));

        await TaskService.Create({
            employee_id: req.userid,
            title,
            description,
            date: utcDate,
            status: 'pending'
        });
        res.status(200).send({message: 'Task created'});
    } catch (error) {
        res.status(500).send({message: 'Internal server error',error});
    }
}

const FindByIdTask = async (req: CustomRequest, res: Response) => {
    try {
        const id = req.userid;

        if(!id){
            res.send(404).send({message: 'id null'});
            return;      
        }

        const task = await TaskService.FindById(id);
        res.status(200).send(task);

    } catch (error) {
        res.status(500).send({message: "Internal server error",error});
    }
}

const FindTaskAdmin = async (req: CustomRequest, res: Response) => {
    try {
        const id = `${process.env.ID_ADMIN}`;

        if(!id){
            res.send(404).send({message: 'id null'});
            return;      
        }

        const tasks = await TaskService.FindByIdAdmin(id);
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send({message: "Internal server error",error});
    }
}

const FindTaskMembers = async (req: CustomRequest, res: Response) => {
    try {
        const id = req.userid;

        if(!id){
            res.send(404).send({message: 'id null'});
            return;      
        }

        const tasks = await TaskService.FindByIdInMembers(id);
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send({message: "Internal server error",error});
    }
}

const CreateTaskAdmin = async (req: CustomRequest, res: Response) => {
    try {
        const {title, description,date,members} = req.body;

        await TaskService.Create({
            admin_id: `${process.env.ID_ADMIN}`,
            members: members,
            title,
            description,
            date: date,
            status: 'pending'
        });
        res.status(200).send({message: 'Task created'});
    } catch (error) {
        res.status(500).send({message: 'Internal server error',error});
    }
}

const UpdateTask = async (req: CustomRequest, res: Response) => {
    try {
        const {status} = req.body;
        const {id} = req.params;
        await TaskService.Update(id, status);
        res.status(200).send({message: 'Task updated'});
    } catch (error) {
        res.status(500).send({message: 'Internal server error',error});
    }
}

const DeleteTask = async (req: CustomRequest, res: Response) => {
    try {
        const id = req.params.id;
        res.status(200).json(await TaskService.Delete(id));
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error});
    }
}

export default {
    CreateTask,
    FindByIdTask,
    FindTaskMembers,
    FindTaskAdmin,
    CreateTaskAdmin,
    UpdateTask,
    DeleteTask
};
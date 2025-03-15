import {Request, Response} from 'express';
import CalledService from '../Service/CalledService';

interface CustomRequest extends Request {
    userid?: string;
    userObject?:{
        name: string;
    };
} 

const CreateCalled = async (req: CustomRequest, res: Response) => {
    try {
        const {title, description} = req.body;

        const date = new Date();
        const formattedDate = date.toISOString();

        await CalledService.Create({
            employee_id: req.userid,
            title, 
            description,
            author: req.userObject?.name,
            date: formattedDate,
            status: 'open',
        });
        res.status(200).send({message: 'Called created'});
    } catch (error) {
        res.status(500).send({messsage: 'Internal server error',error});
    }
}

const FindById = async (req: CustomRequest, res: Response) => {
    try {
        const id = req.userid;

        if(!id){
            res.send(404).send({message: 'id null'});
            return;      
        }

        res.status(200).send(await CalledService.FindById(id));
    } catch (error) {
        res.status(500).send({message: "Internal server error",error});
    }
}

const FindByIdAdmin = async (req: CustomRequest, res: Response) => {
    try {
        const id = `${process.env.ID_ADMIN}`;

        if(!id){
            res.send(404).send({message: 'id null'});
            return;      
        }

        res.status(200).send(await CalledService.FindByIdAdmin(id));
    } catch (error) {
        res.status(500).send({message: "Internal server error",error});
    }
}

const CreateCalledAdmin = async (req: CustomRequest, res: Response) => {
    try {
        const {title, description} = req.body;

        const date = new Date();
        const formattedDate = date.toISOString();

        await CalledService.Create({
            admin_id: `${process.env.ID_ADMIN}`,
            title, 
            description,
            author: 'Administrativo',
            date: formattedDate,
            status: 'open',
        });
        res.status(200).send({message: 'Called created'});
    } catch (error) {
        res.status(500).send({messsage: 'Internal server error',error});
    }
}

const UpdateCalled = async (req: CustomRequest, res: Response) => {
    try {
        const {status} = req.body;
        const {id} = req.params;
        await CalledService.Update(id, status);
        res.status(200).send({message: 'Called updated'});
    } catch (error) {
        res.status(500).send({message: 'Internal server error',error});
    }
}

const DeleteCalled = async (req: CustomRequest, res: Response) => {
    try {
        const id = req.params.id;
        res.status(200).json(await CalledService.Delete(id));
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error});
    }
}

export default {CreateCalled,FindById,FindByIdAdmin,CreateCalledAdmin,UpdateCalled,DeleteCalled};
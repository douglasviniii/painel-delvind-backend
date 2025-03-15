import {Request, Response} from "express";
import NotificationsService from "../Service/NotificationsService";

interface CustomRequest extends Request {
    userid?: string;
    userObject?:object;
} 

const Create = async (req: Request, res: Response) => {
    try {
        const {id, message} = req.body;

        if(!id || !message) res.status(400).send({message: "Missing data"});

        const date = new Date();
        const formattedDate = date.toISOString();

        const data = {
            employee_id: id,
            admin_id: `${process.env.ID_ADMIN}`,
            message: message,
            date: formattedDate,         
        }

        res.status(200).send(await NotificationsService.Create(data));
    } catch (error) {
        res.status(500).send({message: "Internal server error", error});
    }
}

const FindById = async (req: CustomRequest, res: Response) => {
    try {
        const id = req.userid;

        if(!id){
            res.send(404).send({message: 'id null'});
            return;      
        }

        res.status(200).send(await NotificationsService.FindById(id));
    } catch (error) {
        res.status(500).send({message: "Internal server error",error});
    }
}

const Delete = async (req: CustomRequest, res: Response) => {
    try {
        const id = req.params.id;
        res.status(200).json(await NotificationsService.Delete(id));
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error});
    }
}

export default {Create, FindById, Delete};

import {Request, Response} from 'express';
import BudgetService from '../Service/BudgetService';

const CreateController = async (req: Request, res: Response) =>{
    try {
        const {
            clientDocument,
            clientEmail,
            clientName,
            clientPhone,
            items,
            technicalNotes,
            technician,
            total,
        } = req.body;

        const date = new Date();
        const formattedDate = date.toISOString();

        const data = {
            admin_id: `${process.env.ID_ADMIN}`,
            clientDocument,
            clientEmail,
            clientName,
            clientPhone,
            createdAt: formattedDate,
            items,
            technicalNotes,
            technician,
            total,
        }
        await BudgetService.Create(data);
        res.status(200).send({message: 'Payment created with sucess'});

    } catch (error) {
        res.status(500).send({message: 'internval server error', error});
    }
}

const FindController = async (req: Request, res: Response) => {
    try {
        const response = await BudgetService.FindAll();
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({message: 'internval server error', error});
    }
}

const UpdateController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await BudgetService.Update(id, data);
        res.status(200).send({message: 'Alteração concluída com sucesso!'});
    } catch (error) {
        res.status(500).send({message: 'internval server error', error});
    }
}

const DeleteController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const response = await BudgetService.Delete(id);
        res.status(200).send({message: 'Payment:', response});
    } catch (error) {
        res.status(500).send({message: 'internval server error', error});
    }
}

export default {CreateController,UpdateController,FindController,DeleteController};











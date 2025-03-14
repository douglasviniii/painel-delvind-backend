import {Request, Response} from 'express';
import Pagarme from '../Service/Pagarme';
import PaymentService from '../Service/PaymentService';

const CreateController = async (req: Request, res: Response) =>{
    try {
        const {name, amount} = req.body;

        if(!name || !amount){
            res.status(400).send({message: 'Value empty'}); 
        }
        const response = await Pagarme.CreatePaymentService({name, amount, quantity: 1});

        //const {id, created_at, updated_at} = response;
        //const items_total_cost = response.cart_settings.items_total_cost;
        //const admin_id = `${process.env.ID_ADMIN}`;
        //await PaymentService.Create({admin_id, id, created_at, updated_at, items_total_cost});

        res.status(200).send({message: 'Payment created with sucess', response});

    } catch (error) {
        res.status(500).send({message: 'internval server error', error});
    }
}

const FindController = async (req: Request, res: Response) => {
    try {
        const response = await Pagarme.FindPayments();
        res.status(200).send({message: 'Payments:', response});
    } catch (error) {
        res.status(500).send({message: 'internval server error', error});
    }
}

const FindDBController = async (req: Request, res: Response) => {
    try {
        const response = await PaymentService.FindAll();
        res.status(200).send({message: 'Payments:', response});
    } catch (error) {
        res.status(500).send({message: 'internval server error', error});
    }
}

const FindByIdController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const response = await Pagarme.FindByIdPayments(id);
        res.status(200).send({message: 'Payment:', response});
    } catch (error) {
        res.status(500).send({message: 'internval server error', error});
    }
}

const DesactivateController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await Pagarme.DesactivatePayments(id);
        res.status(200).send({message: 'Link desactivate'});
        
    } catch (error) {
        res.status(500).send({message: 'internval server error', error});
    }
}


export default {CreateController,FindDBController,FindController,FindByIdController,DesactivateController};











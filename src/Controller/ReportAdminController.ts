import { Request, Response } from "express";
import ReportAdminService from "../Service/ReportAdminService";

const CreateReportAdmin = async (req: Request, res: Response) => {
    try {
       const {title, content} = req.body;

       const date = new Date();
       const formattedDate = date.toISOString();

       res.status(201).json(await ReportAdminService.Create({
        admin_id: `${process.env.ID_ADMIN}`,
        title,
        author: 'Administrativo',
        content,
        date: formattedDate
    })); 
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error',error});
    }
}

const FindReportAdmin = async (req: Request, res: Response) => {
    try {
        const id = `${process.env.ID_ADMIN}`;
        res.status(200).json(await ReportAdminService.FindById(id));
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error});
    }
}

const UpdateReportAdmin = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const data = req.body;
        res.status(200).json(await ReportAdminService.Update(id, data));
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error});
    }
}

const DeleteReportAdmin = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        res.status(200).json(await ReportAdminService.Delete(id));
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error});
    }
}


export default {CreateReportAdmin,FindReportAdmin,DeleteReportAdmin,UpdateReportAdmin};
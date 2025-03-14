import { Request, Response } from "express";
import ReportEmployeeService from "../Service/ReportEmployeeService";

interface CustomRequest extends Request {
    userid?: string;
    userObject?: { name: string };
} 

const CreateReportEmployee = async (req: CustomRequest, res: Response) => {
    try {
       const {title, content} = req.body;

        const date = new Date();
        const formattedDate = date.toISOString();
        
       res.status(201).json(await ReportEmployeeService.Create({
        employee_id: req.userid,
        author: req.userObject!.name || 'Usuário',
        title,
        content,
        date: formattedDate
    })); 
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error',error});
    }
}

const SendReportEmployee = async (req: CustomRequest, res: Response) => {
    try {
       const id = req.params.id;
       res.status(201).json(await ReportEmployeeService.Send({
        employee_id: req.userid,
        admin_id: `${process.env.ID_ADMIN}`,
        report_id: id,
    })); 
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error',error});
    }
}

const ReportEmployeeFindById = async (req: CustomRequest, res: Response) => {
    try {
        const id = req.userid;
        res.status(200).send(await ReportEmployeeService.FindById(id!));
    } catch (error) {
        res.status(500).send({message: "Internal server error",error});
    }
}

const SendsReportEmployeeFindById = async (req: CustomRequest, res: Response) => {
    try {
        const id = `${process.env.ID_ADMIN}`;
        res.status(200).send(await ReportEmployeeService.FindByIdSends(id!));
    } catch (error) {
        res.status(500).send({message: "Internal server error",error});
    }
}

const DeleteReportEmployee = async (req: CustomRequest, res: Response) => {
    try {
        const id = req.params.id;
        res.status(200).json(await ReportEmployeeService.Delete(id));
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error});
    }
}

const DeleteReportSendsEmployee = async (req: CustomRequest, res: Response) => {
    try {
        const id = req.params.id;
        res.status(200).json(await ReportEmployeeService.DeleteSends(id));
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error});
    }
}

const UpdateReportEmployee = async (req: CustomRequest, res: Response) => {
    try {
        const id = req.params.id;
        const data = req.body;
        res.status(200).json(await ReportEmployeeService.Update(id, data));
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error});
    }
}

export default {
    CreateReportEmployee,
    SendReportEmployee,
    ReportEmployeeFindById,
    SendsReportEmployeeFindById,
    DeleteReportEmployee,
    DeleteReportSendsEmployee,
    UpdateReportEmployee
};